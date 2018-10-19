const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");
let db = require("./models");

let PORT = process.env.PORT || 8080;
let mongooseConnection = mongoose.connection;

let app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static("client"));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

mongoose.Promise = global.Promise;

mongoose.connect( 
  process.env.MONGODB_URI || "mongodb://heroku_8zqx26cl:le1fh1tcj3m2gsggd819o9ns7e@ds249398.mlab.com:49398/heroku_8zqx26cl"
);

mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', function() {
  console.log(`Sucessfully Connected to Mongo DB !`); 
});

var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

app.use(routes); 

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
