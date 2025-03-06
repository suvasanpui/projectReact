// Import required dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the Electors Schema for MongoDB
const ElectorsSchema = new mongoose.Schema({
    // Basic elector information
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    // Contact information
    email: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    // Unique voter identification
    voterNo: {
        type: Number,
        require: true,
        unique: true
    },
    // Authentication credentials
    password: {
        type: String,
        required: true
    },
    // Political affiliation
    party: {
        type: String,
        required: true
    },
    // Array to store voting history
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            votedAt: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    // Track total votes received
    voteCount: {
        type: Number,
        default: 0
    }
});

// Middleware: Hash password before saving
ElectorsSchema.pre('save', async function(next) {
    const electors = this;
    // Only hash password if it's modified
    if(!electors.isModified('password'))
        return next();

    try{
        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(electors.password, salt);
        electors.password = hashPassword;

        next();
    }catch(err){
        return next(err);
    }
});

// Method to compare password for authentication
ElectorsSchema.methods.comparePassword = async function(electorPassword) {
    try{
        // Compare provided password with stored hash
        const isMatch = await bcrypt.compare(electorPassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

// Create and export the Electors model
const Electors = mongoose.model("Electors", ElectorsSchema); 
module.exports = Electors;