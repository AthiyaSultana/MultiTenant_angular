const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userData = new Schema({
  name: String,
  phoneNum: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('userdata', userData);
