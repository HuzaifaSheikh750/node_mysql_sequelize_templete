const express = require('express');

const { CityController } = require('../../controllers');

const router = express.Router();

router.post('/cities', CityController.create);
// router.get('/cities', CityController.getCities);

module.exports = router;