import express from 'express'
import {
  loginUser,
  signupUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from '../controllers/userController.js'
import { requireAdmin } from '../middleware/requireAuth.js'

const router = express.Router()

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags: [User]
 *     summary: Retrieve all users
 *     description: Retrieve a list of all users in the system.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Error retrieving the list of users.
 */

router.get('/', requireAdmin, getAllUsers)

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags: [User]
 *     summary: Log in a user
 *     description: Log in a user by email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *     responses:
 *       200:
 *         description: Returns a user token and email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: Error message if the login fails.
 */
router.post('/login', loginUser)

/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     tags: [User]
 *     summary: Sign up a new user
 *     description: Register a new user by email, password, and role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - role
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *               role:
 *                 type: string
 *                 description: The user's role (e.g., user or admin).
 *     responses:
 *       200:
 *         description: Returns a user token, email, and role.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: Error message if the registration fails.
 */
router.post('/signup', signupUser)

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     tags: [User]
 *     summary: Update a user
 *     description: Update user details by user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's full name.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's new password.
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *                 description: The user's role.
 *     responses:
 *       200:
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *       400:
 *         description: Invalid input, object invalid.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', requireAdmin, updateUser)

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete a user
 *     description: Delete a user by user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'User successfully deleted'
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */

router.delete('/:id', requireAdmin, deleteUser)

export default router
