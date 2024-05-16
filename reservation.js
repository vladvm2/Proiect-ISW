import express from 'express'
import {
  getReservations,
  getReservation,
  addReservations,
  updateReservation,
  deleteReservation,
  getUserReservations,
  stripePayment,
} from '../controllers/reservationController.js'
import { requireAuth } from '../middleware/requireAuth.js'

const router = express.Router()

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     tags: [Reservations]
 *     summary: Retrieve all reservations
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of reservations.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
router.get('/', getReservations)

/**
 * @swagger
 * /api/reservations/{id}:
 *   get:
 *     tags: [Reservations]
 *     summary: Get a single reservation
 *     description: Retrieve details of a specific reservation by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique identifier of the reservation.
 *     responses:
 *       200:
 *         description: A detailed view of the specific reservation.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Reservation not found.
 *       400:
 *         description: Error retrieving reservation.
 */
router.get('/:id', getReservation)

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     tags: [Reservations]
 *     summary: Add one or more new reservations
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Reservation'
 *     responses:
 *       201:
 *         description: Reservations added successfully.
 *       400:
 *         description: Error message if the operation fails.
 */
router.post('/', addReservations)

/**
 * @swagger
 * /api/reservations/{id}:
 *   put:
 *     tags: [Reservations]
 *     summary: Update a reservation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       200:
 *         description: Reservation updated successfully.
 *       404:
 *         description: Reservation not found.
 *       400:
 *         description: Error message if the update fails.
 */
router.put('/:id', updateReservation)

/**
 * @swagger
 * /api/reservations/{id}:
 *   delete:
 *     tags: [Reservations]
 *     summary: Delete a reservation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation ID to delete
 *     responses:
 *       200:
 *         description: Reservation deleted successfully.
 *       404:
 *         description: Reservation not found.
 *       400:
 *         description: Error message if the deletion fails.
 */
router.delete('/:id', deleteReservation)

/**
 * @swagger
 * /api/reservations/user/{userId}:
 *   get:
 *     tags: [Reservations]
 *     summary: Retrieve all reservations for a user
 *     description: Returns a list of reservations made by a specific user.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique identifier of the user.
 *     responses:
 *       200:
 *         description: A list of reservations made by the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *       401:
 *         description: Unauthorized access, login required.
 *       500:
 *         description: Internal server error
 */
router.get('/user/:userId', getUserReservations)

/**
 * @swagger
 * /api/reservations/payment:
 *
 *  */
router.post('/payment', requireAuth, stripePayment)

export default router
