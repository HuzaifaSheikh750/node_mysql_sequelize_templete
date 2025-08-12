const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        console.log("Creating city with data:", req.body);
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        console.log("Updating city with data:", req.body);
        const updatedCity = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: updatedCity,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
};

const deleteCity = async (req, res) => {
    try {
        console.log("Deleting city with ID:", req.params.id);
        await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: {},
            success: true,
            message: 'Successfully deleted the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
};

const getCity = async (req, res) => {
    try {
        console.log("Fetching city with ID:", req.params.id);
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the city',
            err: error
        });
    }
};

const getAllCities = async (req, res) => {
    try {
        console.log("Fetching all cities with filter:", req.query);
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch cities',
            err: error
        });
    }
};

module.exports = { create, update, deleteCity, getCity, getAllCities };
