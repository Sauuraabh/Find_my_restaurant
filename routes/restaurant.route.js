const restaurantController = require('../controllers/restaurant.controller');

module.exports = (app) => {
    app.post(
        "/api/restaurant/add",
        restaurantController.createRestaurant
    );
    app.get(
        "/api/restaurant/",
        restaurantController.getAllRestaurants
    );
    app.get(
        "/api/restaurant/catagories",
        restaurantController.categories
    );
    app.get(
      "/api/restaurant/categories/:categoryName",
      restaurantController.getRestaurantByCategory
    );
};