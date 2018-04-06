const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./server/routing/api');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'dist/brand1')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/local', {useMongoClient: true}, function (err) {

  if (err) {

    console.log("Error occured db not connected");
  } else {

    console.log("db connected successfully");

  }
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/brand1/index.html'))
});
app.get('/brand2', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/brand2/index.html'))
});
app.use('/api', api);
/*console.log('ddddddddddddddddddd');
app.use(function (req, res, next) {
  console.log('sssssssssssssssssssssss');
  next();
});
app.post('/getUserDetails', function (req, res) {
  console.log('sssssssssssssssssssssss');
  console.log(req.body);
  res.json(req.body);
});*/

/*app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'dist/brand1/brand1/index.html'));
});*/


app.listen(port, function () {

  console.log('Server running on port number' + port);

});
