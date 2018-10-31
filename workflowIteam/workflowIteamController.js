
'use strict';

var mongoose = require('mongoose'),
    WorkflowIteam = mongoose.model('WorkflowIteam');

exports.list_all_workflowIteam = function(req, res) {
    WorkflowIteam.find({}, function(err, workflowIteam) {
        if (err)
            res.send(err);
        res.json(workflowIteam);
    });
};

exports.create_a_workflowIteam = function(req, res) {
    var new_workflowIteam = new WorkflowIteam(req.body);
    new_workflowIteam.save(function(err, workflowIteam) {
        if (err)
            res.send(err);
        res.json(workflowIteam);
    });
};

exports.read_a_workflowIteam = function(req, res) {
    WorkflowIteam.findById(req.params.workflowIteamId, function(err, workflowIteam) {
        if (err)
            res.send(err);
        res.json(workflowIteam);
    });
};


exports.update_a_workflowIteam = function(req, res) {
    WorkflowIteam.findOneAndUpdate({_id: req.params.workflowIteamId}, req.body, {new: true}, function(err, workflowIteam) {
        if (err)
            res.send(err);
        res.json(workflowIteam);
    });
};


exports.delete_a_workflowIteam = function(req, res) {
    WorkflowIteam.remove({
        _id: req.params.workflowIteamId
    }, function(err, workflowIteam) {
        if (err)
            res.send(err);
        res.json({ message: 'workflowIteam successfully deleted' });
    });
};