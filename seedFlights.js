import mongoose from 'mongoose'
import Flight from '../models/flightModel.js'
const seedData = [
  {
    departure: 'Bucuresti',
    arrival: 'Paris',
    departureDateTime: new Date(2024, 4, 20, 7, 0),
    arrivalDateTime: new Date(2024, 4, 20, 10, 0),
    price: 400,
    seatsAvailable: 150,
  },
  {
    departure: 'Bucuresti',
    arrival: 'Paris',
    departureDateTime: new Date(2024, 4, 20, 9, 30), // April 20, 2024, 09:30 AM
    arrivalDateTime: new Date(2024, 4, 20, 12, 30), // April 20, 2024, 12:30 PM
    price: 450,
    seatsAvailable: 130,
  },
  {
    departure: 'Bucuresti',
    arrival: 'Paris',
    departureDateTime: new Date(2024, 4, 20, 12, 15), // April 20, 2024, 12:15 PM
    arrivalDateTime: new Date(2024, 4, 20, 15, 15), // April 20, 2024, 03:15 PM
    price: 380,
    seatsAvailable: 140,
  },
  {
    departure: 'Cluj-Napoca',
    arrival: 'Londra',
    departureDateTime: new Date(2024, 4, 21, 9, 0),
    arrivalDateTime: new Date(2024, 4, 21, 11, 30),
    price: 350,
    seatsAvailable: 130,
  },
  {
    departure: 'Iasi',
    arrival: 'Berlin',
    departureDateTime: new Date(2024, 4, 22, 13, 0),
    arrivalDateTime: new Date(2024, 4, 22, 15, 30),
    price: 300,
    seatsAvailable: 120,
  },
  {
    departure: 'Timisoara',
    arrival: 'Viena',
    departureDateTime: new Date(2024, 4, 21, 6, 0),
    arrivalDateTime: new Date(2024, 4, 21, 7, 0),
    price: 250,
    seatsAvailable: 140,
  },
  {
    departure: 'Constanta',
    arrival: 'Madrid',
    departureDateTime: new Date(2024, 4, 22, 15, 0),
    arrivalDateTime: new Date(2024, 4, 22, 18, 0),
    price: 450,
    seatsAvailable: 100,
  },
]

const seedFlights = async () => {
  const MONGO_URI =
    'mongodb://admin:admin@ac-il0w01r-shard-00-00.4vualwz.mongodb.net:27017,ac-il0w01r-shard-00-01.4vualwz.mongodb.net:27017,ac-il0w01r-shard-00-02.4vualwz.mongodb.net:27017/?ssl=true&replicaSet=atlas-6drs5l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BookingCluster'

  await mongoose.connect(MONGO_URI)
  await Flight.deleteMany({})
  await Flight.insertMany(seedData)
  console.log('Data seeded successfully!')
  mongoose.disconnect()
}

seedFlights()
