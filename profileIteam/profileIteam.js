'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var profileIteamSchema = new Schema({
    workflowiteamID:{
        type:String
    },
    description:{
        type: String
    },
    status:{
        type: Boolean
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