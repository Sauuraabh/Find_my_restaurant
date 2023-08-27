const Restaurant = require('../models/restaurant.model');

exports.createRestaurant = async (req, res) => {
    try {
        if (!req.body.name ||
            !req.body.description ||
            !req.body.category ||
            !req.body.imageURL ||
            !req.body.location ||
            !req.body.phone ||
            !req.body.rating) {
            return res.status(500).send({
                message: `Content cannot be empty`
            });
        }

        const restaurantObject = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            imageURL: req.body.imageURL,
            location: req.body.location,
            phone: req.body.phone,
            rating: req.body.rating,
        };
        const restaurantCreated = await Restaurant.create(restaurantObject);
        const restaurant = {
            name: restaurantCreated.name,
            description: restaurantCreated.description,
            category: restaurantCreated.category,
            imageURL: restaurantCreated.imageURL,
            location: restaurantCreated.location,
            phone: restaurantCreated.phone,
            rating: restaurantCreated.rating,
            _id: restaurantCreated._id,
            createdAt: restaurantCreated.createdAt,
            updatedAt: restaurantCreated.updatedAt,
            __v: restaurantCreated.__v,
        };
        return res.status(200).send(restaurant);
    } catch (error) {
        console.log(`Error while creating a new restaurant: ${error}`);
        return res.status(500).send({
            message: `Some error occurred while creating the Restaurant`,
        });
    };
};


exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});

        return res.status(200).send({
            restaurants: restaurants,
            message: "Restaurants fetched successfully.",
        });
    } catch (error) {
        console.log(`Error while fetching restaurants : ${error}`);
        return res.status(500).send({
            message: `Some error occured while fetching the Restaurants`,
        });
    };
};