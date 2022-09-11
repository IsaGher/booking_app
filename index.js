const express = require("express");
const { port } = require("./config");
const flights = require("./routes/flightsRouter");
const auth = require("./routes/authRouter");

const app = express();

//Middleware
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//Middleware para archivos estaticos:
app.use('/static', express.static(__dirname+'/static'));

//Route
app.use(flights);
app.use(auth);

app.get("/", (request, response)=>{
    return response.send("<h1>Hola a todos</h1>");
});

app.listen(port, ()=>{
    console.log(`Listening on http//localhost:${port}`);
});

//printenv (para acceder a las variables de entorno, se definen con export)
//npm install dotenv