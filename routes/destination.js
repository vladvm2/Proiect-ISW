import express from 'express'
import {
  getDestinations,
  getDestination,
  addDestination,
  updateDestination,
  deleteDestination,
  getPopularDestinations,
} from '../controllers/destinationController.js'
import { requireAdmin, requireAuth } from '../middleware/requireAuth.js'

const router = express.Router()

/**
 * @swagger
 * /api/destinations:
 *   get:
 *     tags: [Destinations]
 *     summary: Retrieve all destinations
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of destinations.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Destination'
 */
router.get('/', getDestinations)

/**
 * @swagger
 * /api/destinations/{id}:
 *   get:
 *     tags: [Destinations]
 *     summary: Get a single destination
 *     description: Retrieve details of a specific destination by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique identifier of the destination.
 *     responses:
 *       200:
 *         description: A detailed view of the specific destination.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Destination'
 *       404:
 *         description: Destination not found.
 *       400:
 *         description: Error retrieving destination.
 */
router.get('/:id', getDestination)

/**
 * @swagger
 * /api/destinations:
 *   post:
 *     tags: [Destinations]
 *     summary: Add a new destination
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Destination'
 *     responses:
 *       201:
 *         description: Destination added successfully.
 *       400:
 *         description: Error message if the operation fails.
 */
router.post('/', requireAdmin, addDestination)

/**
 * @swagger
 * /api/destinations/{id}:
 *   put:
 *     tags: [Destinations]
 *     summary: Update a destination
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The destination ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Destination'
 *     responses:
 *       200:
 *         description: Destination updated successfully.
 *       404:
 *         description: Destination not found.
 *       400:
 *         description: Error message if the update fails.
 */
router.put('/:id', requireAdmin, updateDestination)

/**
 * @swagger
 * /api/destinations/{id}:
 *   delete:
 *     tags: [Destinations]
 *     summary: Delete a destination
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The destination ID to delete
 *     responses:
 *       200:
 *         description: Destination deleted successfully.
 *       404:
 *         description: Destination not found.
 *       400:
 *         description: Error message if the deletion fails.
 */
router.delete('/:id', requireAdmin, deleteDestination)

/**
 * @swagger
 * /api/destinations/popular-destinations:
 *   get:
 *     tags: [Destinations]
 *     summary: Retrieve popular destinations
 *     description: Returns a list of popular destinations sorted by search count.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of popular destinations.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Destination'
 *       401:
 *         description: Unauthorized access, login required.
 *       500:
 *         description: Internal server error
 */
router.get('/popular-destinations', requireAuth, getPopularDestinations)

export default router
