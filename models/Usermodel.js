const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true

    },
    email:{
type:String,
unique:true
    },

    password:{
        type:String,
        minlength:8
    }
})

module.exports = mongoose.model("users",userSchema)