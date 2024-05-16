// flightController.js
import Flight from '../models/flightModel.js'

// Get all flights
export const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find()
    res.status(200).json(flights)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single flight by ID
export const getFlightById = async (req, res) => {
  const { id } = req.params
  try {
    const flight = await Flight.findById(id)
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' })
    }
    res.status(200).json(flight)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//classic search
export const searchFlights = async (req, res) => {
  const { departure, arrival, departureDate, passengers } = req.query

  try {
    const searchDate = new Date(departureDate)
    const nextDay = new Date(searchDate)
    nextDay.setDate(searchDate.getDate() + 1)

    const flights = await Flight.find({
      departure: departure,
      arrival: arrival,
      departureDateTime: {
        $gte: searchDate,
        $lt: nextDay,
      },
      seatsAvailable: { $gte: Number(passengers) },
    })

    if (flights.length === 0) {
      return res
        .status(404)
        .json({ message: 'No flights found matching your criteria.' })
    }

    res.status(200).json(flights)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new flight
export const createFlight = async (req, res) => {
  const {
    departure,
    arrival,
    departureDateTime,
    arrivalDateTime,
    price,
    seatsAvailable,
  } = req.body
  try {
    const newFlight = new Flight({
      departure,
      arrival,
      departureDateTime,
      arrivalDateTime,
      price,
      seatsAvailable,
    })
    await newFlight.save()
    res.status(201).json(newFlight)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update a flights
export const updateFlights = async (req, res) => {
  try {
    const updates = req.body.updates
    const bulkOperations = updates.map(update => ({
      updateOne: {
        filter: { _id: update.id },
        update: {
          $inc: {
            seatsAvailable: -update.seatsReserved,
          },
        },
      },
    }))

    const result = await Flight.bulkWrite(bulkOperations, { ordered: true })
    res.status(200).json({
      message: `Successfully updated ${result.modifiedCount} flights.`,
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a flight
export const deleteFlight = async (req, res) => {
  const { id } = req.params
  try {
    const flight = await Flight.findByIdAndDelete(id)
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' })
    }
    res.status(200).json({ message: 'Flight successfully deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
