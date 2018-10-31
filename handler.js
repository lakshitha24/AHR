const serverless = require('serverless-http');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
Profile = require('./profile/profile');
Workflow = require('./workflow/workflow');
ProfileIteam = require('./profileIteam/profileIteam');
WorkflowIteam = require('./workflowIteam/workflowIteam');
const bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testDB');
// let MONGO_URL = 'mongodb+srv://lakshitha:FtJYWg0TJQehaaQP@cluster0-84adv.mongodb.net/testDB?retryWrites=true'
// try {
//     mongoose.connect(MONGO_URL, { useNewUrlParser: true })
// } catch(e) { console.log(e.message) }
// mongoose.connect('mongodb+srv://lakshithajayaweera@gmail.com:1qaz2wsx@1@cluster0-84adv.mongodb.net/testDB?retryWrites=true');

app.use(bodyParser.json({ strict: false }));
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./router'); //importing route
routes(app);

module.exports.handler = serverless(app);