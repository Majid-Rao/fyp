const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:[true,'email is required'],
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    role:{
        type:String,
        enum:["admin","teacher","student","swaper"],
        required:[true],
    },
});
const User = mongoose.model('User', userSchema);
module.exports=User;