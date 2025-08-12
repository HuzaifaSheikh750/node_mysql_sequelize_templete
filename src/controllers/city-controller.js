const {CityService } = require('../services/index');

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
}

// const getCities = async (req, res) => {
//   try {
//     const cities = await City.findAll();
//     return res.status(StatusCodes.OK).json({
//       success: true,
//       message: 'Fetched all cities',
//       error: {},
//       data: cities
//     });
//   } catch (error) {
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//       success: false,
//       message: 'Failed to fetch cities',
//       error: error.message,
//       data: {}
//     });
//   }
// };

module.exports = { create };
