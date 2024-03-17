const asyncHandler = require("express-async-handler");
//@desc Get all destinations
//@route GET /api/destinations
//@access public
const getDestinations = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all destinations" });
  });
  
//@desc Create New destination
//@route POST /api/destinations
//@access public
const createDestination = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if( !name || !email || !phone ) { 
      res.status(400);
      throw new Error("All fields are mandatory");
    }
  res.status(201).json({ message: "Create destination" });
});

//@desc Get destination
//@route GET /api/destinations/:id
//@access public
const getDestination = asyncHandler(async (req, res) => {
  // Corrected the template literal syntax
  res.status(200).json({ message: `Get destination for ${req.params.id}` });
});

//@desc Update destination
//@route PUT /api/destinations/:id
//@access public
const updateDestination = asyncHandler(async (req, res) => {
  // Corrected the template literal syntax
  res.status(200).json({ message: `Update destination for ${req.params.id}` });
});

//@desc Delete destination
//@route DELETE /api/destinations/:id
//@access public
const deleteDestination = asyncHandler(async (req, res) => {
  // Corrected the template literal syntax
  res.status(200).json({ message: `Delete destination for ${req.params.id}` });
});

module.exports = { 
  getDestinations, 
  createDestination, 
  getDestination, 
  updateDestination, 
  deleteDestination 
};