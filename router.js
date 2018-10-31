'use strict';
module.exports = function(app) {
    var profile = require('./profile/profileController');
    var workflow = require('./workflow/workflowController');
    var workflowIteam = require('./workflowIteam/workflowIteamController');
    var profileIteam = require('./profileIteam/profileIteamContoller');


    app.route('/profile')
        .get(profile.list_all_profile)
        .post(profile.create_a_profile);

    app.route('/profile/:profileId')
        .get(profile.read_a_profile)
        .put(profile.update_a_profile)
        .delete(profile.delete_a_profile);

    app.route('/workflow')
        .get(workflow.list_all_workflow)
        .post(workflow.create_a_workflow);

    app.route('/workflow/:workflowId')
        .get(workflow.read_a_workflow)
        .put(workflow.update_a_workflow)
        .delete(workflow.delete_a_workflow);

    app.route('/workflowIteam')
        .get(workflowIteam.list_all_workflowIteam)
        .post(workflowIteam.create_a_workflowIteam);

    app.route('/workflowIteam/:workflowIteamId')
        .get(workflowIteam.read_a_workflowIteam)
        .put(workflowIteam.update_a_workflowIteam)
        .delete(workflowIteam.delete_a_workflowIteam);

    app.route('/profileIteam')
        .get(profileIteam.list_all_profileIteam)
        .post(profileIteam.create_a_profileIteam);

    app.route('/profileIteam/:profileIteamId')
        .get(profileIteam.read_a_profileIteam)
        .put(profileIteam.update_a_profileIteam)
        .delete(profileIteam.delete_a_profileIteam);

};