var orm = require("../config/orm.js");

var burger = {
    selectAll: function(bd) {
        orm.selectAll('burgers',function(res) {
            bd(res);
        });
         
   
    }
}

module.exports = burger;