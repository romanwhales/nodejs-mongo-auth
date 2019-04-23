// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB SetUp
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });


//App SetUp
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);



//Server Setup
const port = process.env.PORT || 3097;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: '+port);
