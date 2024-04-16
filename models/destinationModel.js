import mongoose from 'mongoose'

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  propertiesCount: {
    type: Number,
    default: 0,
  },
  searchCount: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    required: true,
    enum: ['region', 'city', 'attraction'], // Specificează că valorile acceptate sunt 'region', 'city', 'attraction'
    default: 'city', // O valoare implicită dacă niciuna nu este specificată; opțională, dacă dorești să impui alegerea
  },
})

const Destination = mongoose.model('Destination', destinationSchema)

export default Destination
