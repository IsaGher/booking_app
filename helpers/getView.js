const path = require("path"); //Gestionar rutas de archivos

//__dirname indica en que ruta nos encontramos
console.log(__dirname);

const getView = (res, viewName)=>{
    return res.sendFile(path.join(__dirname,"..","views",viewName));
};

module.exports = getView;