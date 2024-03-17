const express = require("express");
const router = express.Router();
const { 
  getDestinations, 
  createDestination, 
  getDestination, 
  updateDestination, 
  deleteDestination  
} = require("../controllers/destinationController");

router.route("/")
  .get(getDestinations)
  .post(createDestination);

router.route("/:id")
  .get(getDestination)
  .put(updateDestination, )
  .delete(deleteDestination  );

module.exports = router;
