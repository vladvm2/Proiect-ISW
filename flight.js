import express from 'express'
import {
  getAllFlights,
  getFlightById,
  createFlight,
  updateFlights,
  deleteFlight,
  searchFlights,
} from '../controllers/flightController.js'
import { requireAdmin } from '../middleware/requireAuth.js'

const router = express.Router()

/**
 * @swagger
 * /api/flights:
 *   get:
 *     tags: [Flights]
 *     summary: Retrieves all flights.
 *     description: Returns a list of all flights.
 *     responses:
 *       200:
 *         description: A list of flights.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flight'
 *       500:
 *         description: Server error
 */
router.get('/', getAllFlights)

/**
 * @swagger
 * /api/flights/search:
 *   get:
 *     tags: [Flights]
 *     summary: Search for flights
 *     description: >
 *       Search flights by departure, arrival, departure date, and number of passengers.
 *       This search allows users to find flights based on specific travel criteria.
 *     parameters:
 *       - in: query
 *         name: departure
 *         schema:
 *           type: string
 *         required: true
 *         description: The departure location of the flight.
 *       - in: query
 *         name: arrival
 *         schema:
 *           type: string
 *         required: true
 *         description: The arrival location of the flight.
 *       - in: query
 *         name: departureDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: The date of departure in YYYY-MM-DD format.
 *       - in: query
 *         name: passengers
 *         schema:
 *           type: number
 *         required: true
 *         description: The number of passengers to check for available seats.
 *     responses:
 *       200:
 *         description: An array of flights that match the criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flight'
 *       404:
 *         description: No flights found that match the criteria.
 *       500:
 *         description: Server error.
 */

router.get('/search', searchFlights)

/**
 * @swagger
 * /api/flights/{id}:
 *   get:
 *     tags: [Flights]
 *     summary: Retrieves a flight by ID.
 *     description: Returns a single flight, based on the ID provided.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the flight to retrieve
 *     responses:
 *       200:
 *         description: Detailed information about a flight.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Flight'
 *       404:
 *         description: Flight not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getFlightById)

/**
 * @swagger
 * /api/flights:
 *   post:
 *     tags: [Flights]
 *     summary: Creates a new flight.
 *     description: Adds a new flight to the database.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flight'
 *     responses:
 *       201:
 *         description: Flight created successfully.
 *       400:
 *         description: Invalid input, object invalid.
 *       500:
 *         description: Server error
 */
router.post('/', requireAdmin, createFlight)

/**
 * @swagger
 * /api/flights/{id}:
 *   put:
 *     tags: [Flights]
 *     summary: Updates a flight.
 *     description: Updates data for an existing flight.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the flight to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flight'
 *     responses:
 *       200:
 *         description: Flight updated successfully.
 *       404:
 *         description: Flight not found.
 *       500:
 *         description: Server error
 */
router.put('/batch-update', updateFlights)

/**
 * @swagger
 * /api/flights/{id}:
 *   delete:
 *     tags: [Flights]
 *     summary: Deletes a flight.
 *     description: Deletes a flight from the database.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the flight to delete
 *     responses:
 *       200:
 *         description: Flight deleted successfully.
 *       404:
 *         description: Flight not found.
 *       500:
 *         description: Server error
 */
router.delete('/:id', requireAdmin, deleteFlight)

export default router
