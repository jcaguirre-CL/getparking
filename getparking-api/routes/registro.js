var express = require('express');
var app = express();////extra
var router = express.Router();
var mongoose = require('mongoose');
var ejs = require('ejs');
var fs = require('fs');
var Registro = require('../models/Registro.js');

router.get('/All', function(req, res, next) {
    Registro.find(function (err, registro) {
      if (err) return next(err);
      res.json(registro);
    });
  });

router.get('/Domo/:domoId', function(req, res, next) {
    Registro.findOne({domoId:req.params.domoId}, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/Domo', function(req, res, next) {
    console.log('Crear un domo');
    Registro.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

router.put('/Domo/:domoId', function(req, res, next) {
    Registro.findByIdAndUpdate(req.params.domoId, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
