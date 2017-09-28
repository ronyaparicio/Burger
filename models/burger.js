var orm = require("../config/orm.js");

var burger = {
<<<<<<< HEAD
    selectAll: function() {
        orm.selectAll('burgers',) 

        
    }
}

module.exports = burger;
=======
    all: function() {
        orm.selectAll('burgers','devoured',0)
    }
}
>>>>>>> 7fd811eb017f259e5987ab803fafcdad11a5f454
