// Import required dependencies and models
const express = require("express");
const route = express.Router();
const User = require("./../models/users.models");
const { jwtmiddleware, generateToken } = require("./../auth/jwt");
const Electors = require("./../models/electors.models");

/**
 * Validates if the requesting user has administrator privileges
 * @param {string} userId - User ID from JWT token
 * @returns {Promise<boolean>} True if user is admin, false otherwise
 */
const isAdmin = async (userId) => {
  try {
    const personRole = await User.findById(userId);
    if (personRole.role === "admin") {
      return true;
    }
  } catch (err) {
    return false;
  }
};

/**
 * Creates a new election candidate
 * POST /signup
 * Requires: Admin access, JWT token
 * Validates: Voter number, contact, age requirements
 */
route.post("/signup", jwtmiddleware, async (req, res) => {
  try {
    // Verify admin privileges
    if (!(await isAdmin(req.user.id))) {
      res.status(403).json({ error: "Admin Not Found" });
    }
    const data = req.body;

    // Validate voter number (must be 12 digits)
    var voterNoOfDigit = data.voterNo.toString().length;
    if (voterNoOfDigit < 12 || voterNoOfDigit > 12) {
      return res
        .status(400)
        .json({ error: "Addhar number should be 12 digit" });
    }

    // Validate contact number (must be at least 10 digits)
    var contactNoOfDigit = data.contact.toString().length;
    if (contactNoOfDigit < 10) {
      return res
        .status(400)
        .json({ error: "Contact number shoud be greater than 10 digit" });
    }

    // Validate age requirement (must be 18 or older)
    if (data.age < 18) {
      return res
        .status(400)
        .json({ error: "age should be greater or equal to 18" });
    }

    // Create and save new elector record
    const newElectors = new Electors(data);
    const response = await newElectors.save();
    console.log(" Elector Data added successfully");

    // Generate JWT token for the new elector
    const jwtPayload = {
      id: response.id,
    };
    console.log(JSON.stringify(jwtPayload));
    const token = generateToken(jwtPayload);

    // Return success response with elector data and token
    res.status(200).json({ response: response, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * Records a vote for a specific candidate
 * POST /votes/:electorsID
 * Requires: Valid voter, Not voted before, JWT token
 * Updates: Vote count, voter status
 */
route.post("/votes/:electorsID", jwtmiddleware, async (req, res) => {
  const electorID = req.params.electorsID;
  const voterID = req.user.id; //id are come from jwtmiddleware
  try {
    const elector = await Electors.findById(electorID);
    const voter = await User.findById(voterID);

    //check elector id is valid or not
    if (!elector) {
      return res.status(404).json({ error: "Invalid Elector ID" });
    }

    //check voter id is valid or not
    if (!voter) {
      return res.status(404).json({ error: "Invalid Voter ID" });
    }

    //check user is admin or voter
    if (voter.role === "admin") {
      return res.status(404).json({ error: "Admin can not allow to vote" });
    }

    //check user is already voted or not
    if (voter.isVoted) {
      return res.status(404).json({ error: "Voter already give a vote" });
    }

    //update the electors details
    elector.votes.push({ user: voter });
    elector.voteCount++;
    await elector.save();

    //update the voter details
    voter.isVoted = true;
    await voter.save();
    res.status(200).json({ message: "vote successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internaml server error" });
  }
});

/**
 * Retrieves total vote counts for all candidates
 * GET /votes/counts
 * Requires: Admin access, JWT token
 * Returns: Sorted list of candidates with vote counts
 */
route.get("/votes/counts", jwtmiddleware, async (req, res) => {
  const userID = req.user.id; //get id from jwtmiddleware
  const isUser = await User.findById(userID);
  if (isUser.role === "voter") {
    return res
      .status(404)
      .json({ error: "Invalid , Only Admin can see No. of Votes" });
  }
  try {
    const electorsResult = await Electors.find().sort({ voteCount: "desc" });
    const voteresult = electorsResult.map((data) => {
      return {
        electorsName: data.name,
        electorsParty: data.party,
        electorsCount: data.voteCount,
      };
    });
    return res.status(200).json({ voteresult });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "internal server error" });
  }
});

/**
 * Lists all registered election candidates
 * GET /
 * Requires: JWT token
 * Returns: Basic information about all candidates
 */
route.get('/',jwtmiddleware,async(req,res)=>{
  try{
    const allElectors=await Electors.find();
    const response=allElectors.map((data)=>{
    return{
      name:data.name,
      party:data.party,
      id:data.id
    }
  })
  return res.status(200).json({response})

  }catch(err){
    console.log(err);
    return res.status(500).json({error:"internal server error"});
  }
})

/**
 * Gets detailed vote information for a specific candidate
 * GET /votes/counts/:electorId
 * Requires: JWT token
 * Returns: Candidate details and current vote count
 */
route.get("/votes/result/:electorId", jwtmiddleware, async (req, res) => {
    try {
        const elector = await Electors.findById(req.params.electorId);
        
        if (!elector) {
            return res.status(404).json({ error: "Candidate not found" });
        }

        const voteInfo = {
            candidateName: elector.name,
            party: elector.party,
            currentVotes: elector.voteCount,
            lastVoted: elector.votes.length > 0 ? 
                elector.votes[elector.votes.length - 1].votedAt : null
        };

        return res.status(200).json(voteInfo);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Export router for use in main application
module.exports = route;
