'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var workflowIteamSchema = new Schema({
    title: {
        type: String
    },
    orderID:{
        type: Number
    },
    ownerName:{
        type: String
    },
    workflowID:{
        type:String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.WorkflowIteam ||  mongoose.model('WorkflowIteam', workflowIteamSchema);