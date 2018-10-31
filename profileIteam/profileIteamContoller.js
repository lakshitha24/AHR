'use strict';

var mongoose = require('mongoose'),
    ProfileIteam = mongoose.model('ProfileIteam');

exports.list_all_profileIteam = function(req, res) {
    ProfileIteam.find({}, function(err, profileIteam) {
        if (err)
            res.send(err);
        res.json(profileIteam);
    });
};

exports.create_a_profileIteam = function(req, res) {
    var new_profileIteam = new ProfileIteam(req.body);
    new_profileIteam.save(function(err, profileIteam) {
        if (err)
            res.send(err);
        res.json(profileIteam);
    });
};

exports.read_a_profileIteam = function(req, res) {
    ProfileIteam.findById(req.params.profileIteamId, function(err, profileIteam) {
        if (err)
            res.send(err);
        res.json(profileIteam);
    });
};


exports.update_a_profileIteam = function(req, res) {
    ProfileIteam.findOneAndUpdate({_id: req.params.profileIteamId}, req.body, {new: true}, function(err, profileIteam) {
        if (err)
            res.send(err);
        res.json(profileIteam);
    });
};


exports.delete_a_profileIteam = function(req, res) {
    ProfileIteam.remove({
        _id: req.params.profileIteamId
    }, function(err, profileIteam) {
        if (err)
            res.send(err);
        res.json({ message: 'profile successfully deleted' });
    });
};