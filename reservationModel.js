import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
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
  seatsReserved: {
    type: Number,
    required: true,
  },
})

const reservation = mongoose.model('Reservation', reservationSchema)

export default reservation
