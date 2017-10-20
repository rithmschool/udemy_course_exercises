var express = require("express");
var router = express.Router();
var db = require("../models");
var jwt = require('jsonwebtoken');
var helpers = require('../helpers/auth');

router.post('/signin', helpers.signin);
router.post('/signup', helpers.signup);

module.exports = router;
