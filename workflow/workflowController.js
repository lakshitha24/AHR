'use strict';

var mongoose = require('mongoose'),
    Workflow = mongoose.model('Workflow');

exports.list_all_workflow = function(req, res) {
    Workflow.find({}, function(err, workflow) {
        if (err)
            res.send(err);
        res.json(workflow);
    });
};

exports.create_a_workflow = function(req, res) {
    var new_workflow = new Workflow(req.body);
    new_workflow.save(function(err, workflow) {
        if (err)
            res.send(err);
        res.json(workflow);
    });
};

exports.read_a_workflow = function(req, res) {
    Workflow.findById(req.params.workflowId, function(err, workflow) {
        if (err)
            res.send(err);
        res.json(workflow);
    });
};


exports.update_a_workflow = function(req, res) {
    Workflow.findOneAndUpdate({_id: req.params.workflowId}, req.body, {new: true}, function(err, workflow) {
        if (err)
            res.send(err);
        res.json(workflow);
    });
};


exports.delete_a_workflow = function(req, res) {
    Workflow.remove({
        _id: req.params.workflowId
    }, function(err, workflow) {
        if (err)
            res.send(err);
        res.json({ message: 'profile successfully deleted' });
    });
};

