import Reservation from '../models/reservationModel.js'
import dotenv from 'dotenv'
import Stripe from 'stripe'
import User from '../models/userModel.js'
dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// Get all reservations
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user')
    res.status(200).json(reservations)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get one reservation
const getReservation = async (req, res) => {
  const { id } = req.params
  try {
    const reservation = await Reservation.findById(id)
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' })
    }
    res.status(200).json(reservation)
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving reservation' })
  }
}

// Get all reservations by a specific user
const getUserReservations = async (req, res) => {
  const userId = req.params.userId
  try {
    const reservations = await Reservation.find({ user: userId })
    if (!reservations.length) {
      return res
        .status(404)
        .json({ message: 'No reservations found for this user' })
    }
    res.status(200).json(reservations)
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving reservations' })
  }
}

// Create new reservations (one or more)
const addReservations = async (req, res) => {
  console.log(req.body.reservations)
  try {
    const reservationsData = req.body.reservations
    const user = await User.findOne({
      email: reservationsData[0].email,
    }).exec()
    if (!user) {
      throw new Error(`User with email ${reservationsData[0].Email} not found`)
    }
    const newReservations = await Reservation.insertMany(
      reservationsData.map(reservation => ({
        user: user._id,
        departure: reservation.departure,
        arrival: reservation.arrival,
        departureDateTime: reservation.departureDateTime,
        arrivalDateTime: reservation.arrivalDateTime,
        price: reservation.price * reservation.seatsReserved,
        seatsReserved: reservation.seatsReserved,
      }))
    )

    res.status(201).json(newReservations)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a reservation
const updateReservation = async (req, res) => {
  const { id } = req.params
  const updateData = req.body

  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    )
    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' })
    }
    res.status(200).json(updatedReservation)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a reservation
const deleteReservation = async (req, res) => {
  const { id } = req.params

  try {
    const result = await Reservation.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ message: 'Reservation not found' })
    }
    res.status(200).json({ message: 'Reservation deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
const stripePayment = async (req, res) => {
  const { products } = req.body

  const lineItems = products.map(product => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }))
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    })
    res.status(200).json(session)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export {
  getReservations,
  getReservation,
  addReservations,
  updateReservation,
  deleteReservation,
  getUserReservations,
  stripePayment,
}
