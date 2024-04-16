import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const createToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)
    const token = createToken(user._id, user.role)
    res.status(200).json({ email, token, role: user.role, name: user.name })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup user
const signupUser = async (req, res) => {
  const { email, password, role, name } = req.body

  try {
    const user = await User.signup(name, email, password, role)
    const token = createToken(user._id, role)
    res.status(200).json({ email, token, role, name })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, password, role } = req.body

  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      name,
      email,
      role,
      password,
    })

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'User successfully deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { loginUser, signupUser, updateUser, deleteUser, getAllUsers }
