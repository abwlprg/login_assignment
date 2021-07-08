const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // Always attach a date to user registration to make it easier in life.
    // this is done for us only.
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)