var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Astart = require('../models/Astart.js');

//Home Page
router.get('/', function(req, res, next){
	Astart.find(function(err, astart){
		if(err) return next(err);
		res.json(astart)
	});
});

router.post('/', function(req, res, next){
	Astart.create(req.body, function(err, astart){
		if(err) return next(err);
		res.json(astart);
	});
});

module.exports = router;