// attractionController.js
import Attraction from '../models/attractionModel.js'

// Get all attractions
export const getAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find()
    res.status(200).json(attractions)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get a single attraction
export const getAttraction = async (req, res) => {
  const { id } = req.params
  try {
    const attraction = await Attraction.findById(id)
    if (!attraction) {
      return res.status(404).json({ message: 'Attraction not found' })
    }
    res.status(200).json(attraction)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Create a new attraction
export const createAttraction = async (req, res) => {
  const { name, imagePath, numberOfAttractions } = req.body
  try {
    const newAttraction = new Attraction({
      name,
      imagePath,
      numberOfAttractions,
    })
    await newAttraction.save()
    res.status(201).json(newAttraction)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update an attraction
export const updateAttraction = async (req, res) => {
  const { id } = req.params
  const { name, imagePath, numberOfAttractions } = req.body
  try {
    const updatedAttraction = await Attraction.findByIdAndUpdate(id, {
      name,
      imagePath,
      numberOfAttractions,
    })
    if (!updatedAttraction) {
      return res.status(404).json({ message: 'Attraction not found' })
    }
    res.status(200).json(updatedAttraction)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete an attraction
export const deleteAttraction = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Attraction.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ message: 'Attraction not found' })
    }
    res.status(200).json({ message: 'Attraction deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
