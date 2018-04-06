const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userData = require('../models/userSchema');

router.post('/getUserDetails', (req, res) => {

  console.log('req.body', req.body);

  userData.findOne({'email': req.body.email}, function (error, data) {
    if (data) {
      console.log('data', data);
      res.status(200).send({'message': 'user exists'});
    } else {
      res.status(400).send({'message': 'user doesnt exists'});
    }
  });

});
/*
router.post('/saveUserDetails', (req, res) => {
  console.log('req.body', req.body);

  userData.create(req.body, function (err, data) {
    if (err) {
      console.log('error', err);
    } else {
      res.status(200).send(data);
    }
  });
});
*/

module.exports = router;
