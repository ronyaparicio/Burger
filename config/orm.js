
var connection = require("../config/connection.js");


var orm = {
  selectAll: function(tableInput, bd) {
    var queryString = "SLECT * FROM ?";
    connection.query(queryString,[tableInput], function(err,result) {
      console.log("line 9 orm", result);
    });
  },
  insertOne: function() {},
  updateOne: function() {}
}

module.exports = orm;
