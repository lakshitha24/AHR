'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var profileIteamSchema = new Schema({
    workflowID:{
        type:String
    },
    workflowItemID:{
        type: String
    },
    description:{
        type: String
    },
    status:{
        type: Number,
        default:0
    },
    action:{
      type:Boolean,
        default: false
    },
    profileID:{
        type : String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.ProfileIteam ||  mongoose.model('ProfileIteam', profileIteamSchema);