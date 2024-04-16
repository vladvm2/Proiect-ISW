import Destination from '../models/destinationModel.js'

// Get all destinations
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find()
    res.status(200).json(destinations)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get one destination
const getDestination = async (req, res) => {
  const { id } = req.params
  try {
    const destination = await Destination.findById(id)
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' })
    }
    res.status(200).json(destination)
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving destination' })
  }
}

// Add a new destination
const addDestination = async (req, res) => {
  const {
    name,
    imagePath,
    description,
    propertiesCount = 0,
    searchCount = 0,
    type,
  } = req.body
  try {
    const newDestination = new Destination({
      name,
      imagePath,
      description,
      propertiesCount,
      searchCount,
      type,
    })
    await newDestination.save()
    res.status(201).json(newDestination)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a destination
const updateDestination = async (req, res) => {
  const { id } = req.params
  const { name, imagePath, description, propertiesCount, searchCount, type } =
    req.body

  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      { name, imagePath, description, propertiesCount, searchCount, type },
      { new: true }
    )
    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' })
    }
    res.status(200).json(updatedDestination)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a destination
const deleteDestination = async (req, res) => {
  const { id } = req.params

  try {
    const result = await Destination.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ message: 'Destination not found' })
    }
    res.status(200).json({ message: 'Destination deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get popular destinations based on search count
const getPopularDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find()
      .sort({ searchCount: -1 })
      .limit(5)
    res.status(200).json(destinations)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export {
  getDestinations,
  getDestination,
  addDestination,
  updateDestination,
  deleteDestination,
  getPopularDestinations,
}
