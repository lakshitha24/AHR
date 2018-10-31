'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WorkflowSchema = new Schema({
    title: {
        type: String
    },
    orderId:{
      type: Number
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Workflow ||  mongoose.model('Workflow', WorkflowSchema);