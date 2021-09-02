const mongoose = require('mongoose')
const problemSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    code:{
        type:String,
    },
    name:{
        type:String,
    },
    body:{
        type:String,
        default:null
    }, 
    testcases:[{
        number:Number,
        active:Boolean,
    },],
    masterjudge:{
        id:Number,
        name:String,
        uri:String,
    }
    
})
module.exports = mongoose.model("problems",problemSchema)
