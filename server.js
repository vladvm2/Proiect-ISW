import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swaggerSpec.js'
import { requireAuth } from './middleware/requireAuth.js'

//import
import userRoutes from './routes/user.js'
import destinationRoutes from './routes/destination.js'
import attractionRoutes from './routes/attraction.js'
import flightRoutes from './routes/flight.js'
import reservationRoutes from './routes/reservation.js'

dotenv.config()

//express app
const app = express()

//middleware for swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//midlleware
app.use(express.json())

//routes
app.use('/api/user', userRoutes)
app.use('/api/destinations', requireAuth, destinationRoutes)
app.use('/api/attractions', requireAuth, attractionRoutes)
app.use('/api/flights', requireAuth, flightRoutes)
app.use('/api/reservations', requireAuth, reservationRoutes)

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`listening on port ${process.env.PORT}!`)
    )
  })
  .catch(err => {
    console.log(err)
  })
