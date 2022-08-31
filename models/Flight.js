const { query } = require("../libs/db");

class Flight{

    getAll(){
        //const flights = await query("SELECT * FROM flights");
        //console.log(flights);
        //return flights;
        return query("SELECT * FROM flights");
    };
};

module.exports = Flight;