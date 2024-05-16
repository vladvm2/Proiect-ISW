import mongoose from 'mongoose'

const flightSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  departureDateTime: {
    type: Date,
    required: true,
  },
  arrivalDateTime: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seatsAvailable: {
    type: Number,
    required: true,
  },
})

const Flight = mongoose.model('Flight', flightSchema)

export default Flight
