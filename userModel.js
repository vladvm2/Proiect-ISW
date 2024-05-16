import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

//static signup method
userSchema.statics.signup = async function (name, email, password, role) {
  //validation
  if (!email || !password || !role || !name) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Please enter a valid email address')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  if (!validator.isIn(role, ['user', 'admin'])) {
    throw Error('Role must be user or admin')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash, role, name })

  return user
}

//static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect email!')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password!')
  }

  return user
}

const User = mongoose.model('User', userSchema)
export default User
