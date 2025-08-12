const express = require('express');

const { CityController } = require('../../controllers');

const router = express.Router();

router.post('/cities', CityController.create);
router.get('/cities', CityController.getAllCities);
router.get('/cities/:id', CityController.getCity);
router.put('/cities/:id', CityController.update);
router.delete('/cities/:id', CityController.deleteCity);

module.exports = router;