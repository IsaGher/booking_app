const express = require("express");
const path = require("path"); //Gestionar rutas de archivos

//__dirname indica en que ruta nos encontramos
console.log(__dirname);
const router = express.Router();

router.get("/flights", (req, res)=>{
    return res.sendFile(path.join(__dirname,"..","views","index.html"));
});

module.exports = router;