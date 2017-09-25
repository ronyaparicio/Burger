var express = require("express");
var router = express.Router();

var cat = require("../models/burger.js");

router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/", function(req,res) {

})
