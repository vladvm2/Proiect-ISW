import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API for Travel App',
      description: 'API Docs',
    },
    host: 'localhost:4000',
    schemes: ['http'],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Destination: {
          type: 'object',
          required: [
            'name',
            'imagePath',
            'description',
            'propertiesCount',
            'searchCount',
            'type',
          ],
          properties: {
            name: {
              type: 'string',
              description: 'The name of the destination.',
            },
            imagePath: {
              type: 'string',
              description: 'URL path to the image of the destination.',
            },
            description: {
              type: 'string',
              description: 'A brief description of the destination.',
            },
            propertiesCount: {
              type: 'integer',
              default: 0,
              description:
                'The number of properties available at the destination.',
            },
            searchCount: {
              type: 'integer',
              default: 0,
              description:
                'The number of times this destination has been searched for.',
            },
            type: {
              type: 'string',
              enum: ['region', 'city', 'attraction'],
              default: 'city',
              description: 'The type of the destination.',
            },
          },
          example: {
            name: 'Exemple Destination',
            imagePath: 'exemple.jpg',
            description: 'A beautiful destination.',
            typ: 'city',
            propertiesCount: 10,
            searchCount: 200,
          },
        },
        Attraction: {
          type: 'object',
          required: ['name', 'imagePath', 'numberOfAttractions'],
          properties: {
            name: {
              type: 'string',
              description:
                'Name of the destination associated with the attraction.',
            },
            imagePath: {
              type: 'string',
              description: 'URL path to the image of the attraction.',
            },
            numberOfAttractions: {
              type: 'number',
              description:
                'Number of attractions available at the destination.',
              minimum: 1,
            },
          },
          example: {
            name: 'Exemple attraction',
            imagePath: '/images/exemple_destination.jpg',
            numberOfAttractions: 99,
          },
        },
        Flight: {
          type: 'object',
          required: [
            'departure',
            'arrival',
            'departureDateTime',
            'arrivalDateTime',
            'price',
            'seatsAvailable',
          ],
          properties: {
            departure: {
              type: 'string',
              description:
                'Airport code or name from which the flight departs.',
            },
            arrival: {
              type: 'string',
              description: 'Airport code or name where the flight arrives.',
            },
            departureDateTime: {
              type: 'string',
              format: 'date-time',
              description: 'Date and time of departure.',
            },
            arrivalDateTime: {
              type: 'string',
              format: 'date-time',
              description: 'Date and time of arrival.',
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Price of one ticket for the flight.',
            },
            seatsAvailable: {
              type: 'number',
              description: 'Number of seats available on the flight.',
            },
          },
          example: {
            departure: 'departure',
            arrival: 'arrival',
            departureDateTime: '2023-10-12T06:00:00Z',
            arrivalDateTime: '2023-10-12T09:00:00Z',
            price: 999,
            seatsAvailable: 99,
          },
        },
        User: {
          type: 'object',
          required: ['email', 'password', 'role'],
          properties: {
            _id: {
              type: 'string',
              description: 'The unique identifier for the user.',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'The email address of the user.',
            },
            password: {
              type: 'string',
              format: 'password',
              description: 'The encrypted password of the user.',
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
              description: 'The role of the user in the system.',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'The timestamp when the user was created.',
            },
          },
          example: {
            _id: '507f191e810c19729de860ea',
            email: 'user@example.com',
            password: 'encryptedPassword',
            role: 'user',
            createdAt: '2023-01-01T00:00:00Z',
          },
        },
        Reservation: {
          type: 'object',
          required: [
            'user',
            'departure',
            'arrival',
            'departureDateTime',
            'arrivalDateTime',
            'price',
            'seatsReserved',
          ],
          properties: {
            user: {
              type: 'string',
              description: 'MongoDB ObjectId referencing User.',
            },
            departure: {
              type: 'string',
              description:
                'Airport code or name from which the flight departs.',
            },
            arrival: {
              type: 'string',
              description: 'Airport code or name where the flight arrives.',
            },
            departureDateTime: {
              type: 'string',
              format: 'date-time',
              description: 'Date and time of departure.',
            },
            arrivalDateTime: {
              type: 'string',
              format: 'date-time',
              description: 'Date and time of arrival.',
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Price of one ticket for the flight.',
            },
            seatsReserved: {
              type: 'number',
              description: 'Number of seats available on the flight.',
            },
          },
          example: {
            user: '507f191e810c19729de860ea',
            departure: 'Bucuresti',
            arrival: 'Paris',
            departureDateTime: '2023-10-12T06:00:00Z',
            arrivalDateTime: '2023-10-12T09:00:00Z',
            price: 1200,
            seatsReserved: 2,
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)
export default swaggerSpec
