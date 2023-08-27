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
    app.get(
        "/api/restaurant/:id",
        restaurantController.getRestaurantById
    );
    app.get(
      "/api/restaurant/rating/:ratingValue",
      restaurantController.getRestaurantByRating
    );
    app.put(
        "/api/restaurant/:id",
        restaurantController.updateRestaurantById
    );
    app.delete(
      "/api/restaurant/:id",
      restaurantController.deleteRestaurantById
    );
};