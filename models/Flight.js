const formatDateTime = require("../helpers/formatDate");
const { query } = require("../libs/db");

class Flight{

    static getAll(){
        return query("SELECT * FROM flights");
    };

    static create(data){
        data.hora_salida = formatDateTime(data.hora_salida);
        data.hora_llegada = formatDateTime(data.hora_llegada);

        return query("INSERT INTO flights (??) VALUES (?)", [Object.keys(data), Object.values(data)]);
    };
};

module.exports = Flight;