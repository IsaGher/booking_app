const getView = require("../helpers/getView");

function getHome(req, res){
    return getView(res,"index.html")
};

function search(req, res){
    return getView(res,"search.html");
}

module.exports = {
    getHome,
    search
};

//class Flights{
//    static getHome(req, res){
//        return res.sendFile(path.join(__dirname,"..","views","index.html"));
//    };
//};

//module.exports = Flights;