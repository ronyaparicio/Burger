
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput,colToSearch, valOfCol) {
    var queryString = "SLECT * FROM ??";
    connection.query(queryString,[tableInput], function(err,result) {
      console.log(result);
    });
  },
  insertOne: function() {},
  updateOne: function() {}
}

module.exports = orm;
