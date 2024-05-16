import express from 'express'
import {
  getAttractions,
  getAttraction,
  createAttraction,
  updateAttraction,
  deleteAttraction,
} from '../controllers/attractionController.js'
import { requireAdmin } from '../middleware/requireAuth.js'

const router = express.Router()

/**
 * @swagger
 * /api/attractions:
 *   get:
 *     tags: [Attractions]
 *     summary: Get all attractions
 *     description: Retrieves a list of all attractions.
 *     responses:
 *       200:
 *         description: A list of attractions.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attraction'
 *       400:
 *         description: An error occurred retrieving attractions.
 */
router.get('/', getAttractions)

/**
 * @swagger
 * /api/attractions/{id}:
 *   get:
 *     tags: [Attractions]
 *     summary: Get a single attraction
 *     description: Retrieves details about a specific attraction by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the attraction.
 *     responses:
 *       200:
 *         description: Detailed information about the attraction.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attraction'
 *       404:
 *         description: Attraction not found.
 *       400:
 *         description: Error retrieving the attraction.
 */
router.get('/:id', getAttraction)

/**
 * @swagger
 * /api/attractions:
 *   post:
 *     tags: [Attractions]
 *     summary: Create a new attraction
 *     description: Adds a new attraction to the database.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attraction'
 *     responses:
 *       201:
 *         description: Attraction created successfully.
 *       400:
 *         description: Error creating the attraction.
 */
router.post('/', requireAdmin, createAttraction)

/**
 * @swagger
 * /api/attractions/{id}:
 *   put:
 *     tags: [Attractions]
 *     summary: Update an attraction
 *     description: Updates details of an existing attraction.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the attraction to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attraction'
 *     responses:
 *       200:
 *         description: Attraction updated successfully.
 *       404:
 *         description: Attraction not found.
 *       400:
 *         description: Error updating the attraction.
 */
router.put('/:id', requireAdmin, updateAttraction)

/**
 * @swagger
 * /api/attractions/{id}:
 *   delete:
 *     tags: [Attractions]
 *     summary: Delete an attraction
 *     description: Removes an attraction from the database.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the attraction to delete.
 *     responses:
 *       200:
 *         description: Attraction deleted successfully.
 *       404:
 *         description: Attraction not found.
 *       400:
 *         description: Error deleting the attraction.
 */
router.delete('/:id', requireAdmin, deleteAttraction)

export default router
