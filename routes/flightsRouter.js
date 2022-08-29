const express = require("express");
//const {homeController} = require("../controllers/flightsController")
const Flights = require("../controllers/flightsController");
//const flightsController = new Flights();

const router = express.Router();

router.get("/flights", Flights.getHome);

router.get("/search", Flights.search);

module.exports = router;