'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WorkflowSchema = new Schema({
    title: {
        type: String
    },
    workflowItem:[{
        title: {
            type: String
        },
        assignee:{
            type: String
        },
        orderID:{
            type: Number,
            default:0
        },
    }],
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Workflow ||  mongoose.model('Workflow', WorkflowSchema);