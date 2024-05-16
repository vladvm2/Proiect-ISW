import mongoose from 'mongoose'
import Attraction from '../models/attractionModel.js'

const seedData = [
  {
    name: 'Barcelona',
    imagePath: 'barcelona.png',
    numberOfAttractions: 120,
  },
  {
    name: 'Brasov',
    imagePath: 'brasov.png',
    numberOfAttractions: 75,
  },
  {
    name: 'Bucuresti',
    imagePath: 'bucuresti.png',
    numberOfAttractions: 100,
  },
  {
    name: 'Cluj-Napoca',
    imagePath: 'cluj.png',
    numberOfAttractions: 50,
  },
  {
    name: 'Constanta',
    imagePath: 'constanta.png',
    numberOfAttractions: 60,
  },
  {
    name: 'Istanbul',
    imagePath: 'istanbul.png',
    numberOfAttractions: 90,
  },
  {
    name: 'Paris',
    imagePath: 'paris.png',
    numberOfAttractions: 150,
  },
  {
    name: 'London',
    imagePath: 'london.png',
    numberOfAttractions: 130,
  },
  {
    name: 'New York',
    imagePath: 'newyork.png',
    numberOfAttractions: 110,
  },
  {
    name: 'Tokyo',
    imagePath: 'tokyo.png',
    numberOfAttractions: 80,
  },
]

const seedAttractions = async () => {
  const MONGO_URI =
    'mongodb://admin:admin@ac-il0w01r-shard-00-00.4vualwz.mongodb.net:27017,ac-il0w01r-shard-00-01.4vualwz.mongodb.net:27017,ac-il0w01r-shard-00-02.4vualwz.mongodb.net:27017/?ssl=true&replicaSet=atlas-6drs5l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BookingCluster'

  await mongoose.connect(MONGO_URI)
  await Attraction.deleteMany({})
  await Attraction.insertMany(seedData)
  console.log('Data seeded successfully!')
  mongoose.disconnect()
}

seedAttractions()
