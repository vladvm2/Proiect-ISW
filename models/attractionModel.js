import mongoose from 'mongoose'

const attractionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  numberOfAttractions: {
    type: Number,
    required: true,
    min: 1,
  },
})

const Attraction = mongoose.model('Attraction', attractionSchema)

export default Attraction
