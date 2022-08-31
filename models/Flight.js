const { query } = require("../libs/db");

class Flight{

    async getAll(){
        const flights = await query("SELECT * FROM flights");
        console.log(flights);
    };
};

module.exports = Flight;