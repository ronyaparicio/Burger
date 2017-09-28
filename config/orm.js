var connection = require('./connection.js')

var orm = {
  selectAll: function(tableInput,colToSearch, valOfCol) {
    var queryString = "SLECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString,[tableInput,colToSearch,valOfCol], function(err,result) {
      console.log(result);
    });
  },
  insertOne: function() {},
  updateOne: function() {}
}

module.exports = orm;
