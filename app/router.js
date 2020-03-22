const express = require('express');
const router = express.Router(); 
const mainController = require('./controllers/mainController');
const typeController = require('./controllers/typeController');



router.get("/", mainController.homePage);

router.get("/pokemon/:id", mainController.pokemonPage);

router.get("/types", typeController.typePage);

router.get("/types/:id", typeController.showByType);

module.exports = router ; 