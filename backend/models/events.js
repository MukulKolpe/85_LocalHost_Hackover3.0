const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
 title:{
        type:String,
        required:true
 },
description:{
        type:String,
        required:true
},
time:{
        type:String,
        required:true
},
date:{
        type:String,
        required:true
},
image:{
        type:String,
},
mode:{
    type:String,
    enum:['Online','In-Person'],
},
location:{
    type:String,
    required:true
},
price:{
    type:Number,
    default:0,
},
tags: {
    type: String,
    enum: ["Sports", "Tech", "Art", "Music", "Food", "Literature", "Other"],
  },



})

module.exports = mongoose.model('Event',eventSchema);
