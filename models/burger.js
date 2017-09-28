var orm = require("../config/orm.js");

var burger = {
    all: function() {
        orm.selectAll('burgers','devoured',0)
    }
}