const express = require("express");
const { port } = require("./config");
const flights = require("./routes/flights");

const app = express();

//Middleware
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//Route
app.use(flights);

app.get("/", (request, response)=>{
    return response.send("<h1>Hola a todos</h1>");
});

app.listen(port, ()=>{
    console.log(`Listening on http//localhost:${port}`);
});

//printenv (para acceder a las variables de entorno, se definen con export)
//npm install dotenv