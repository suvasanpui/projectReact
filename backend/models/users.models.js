const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    contact:{
        type:String
    },
    voterNo:{
        type:Number,
        require:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isVoted:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["voter","admin"],
        default:"voter"
    }
});
userSchema.pre('save',async function(next) {
    const user=this;
    if(!user.isModified('password'))
        return next();

    try{
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(user.password,salt);
        user.password=hashPassword;

        next();
    }catch(err){
        return next(err);
    }
})


userSchema.methods.comparePassword=async function(candidatePassword) {
    try{
        const isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

const User=mongoose.model("User",userSchema);
module.exports=User;