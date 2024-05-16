import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userModel.js'

dotenv.config()

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.user = await User.findOne({ _id }).select('_id')
    next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ error: 'Invalid token. Authentication failed.' })
    } else {
      console.error(error)
      return res.status(500).json({ error: 'Internal server error' })
    }
  }
}

const requireAdmin = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.SECRET)

    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' })
    }

    req.user = decoded
    next()
  } catch (error) {
    return res
      .status(401)
      .json({ error: 'Invalid token. Authentication failed.' })
  }
}

export { requireAuth, requireAdmin }
