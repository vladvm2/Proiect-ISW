const express = require("express");
const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.status(200).json({ message: "Get all destinations" });
  })
  .post((req, res) => {
    res.status(200).json({ message: "Create destination" });
  });

router.route("/:id")
  .get((req, res) => {
    // Corrected the template literal syntax
    res.status(200).json({ message: `Get destination for ${req.params.id}` });
  })
  .put((req, res) => {
    // Corrected the template literal syntax
    res.status(200).json({ message: `Update destination for ${req.params.id}` });
  })
  .delete((req, res) => {
    // Corrected the template literal syntax
    res.status(200).json({ message: `Delete destination for ${req.params.id}` });
  });

module.exports = router;
