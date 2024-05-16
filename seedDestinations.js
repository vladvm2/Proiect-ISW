import mongoose from 'mongoose'
import Destination from '../models/destinationModel.js'

const MONGO_URI =
  'mongodb://admin:admin@ac-il0w01r-shard-00-00.4vualwz.mongodb.net:27017,ac-il0w01r-shard-00-01.4vualwz.mongodb.net:27017,ac-il0w01r-shard-00-02.4vualwz.mongodb.net:27017/?ssl=true&replicaSet=atlas-6drs5l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BookingCluster'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => {
    console.log('MongoDB connection error: ', err)
  })

const seedDestinations = async () => {
  await Destination.deleteMany({})
  const destinations = [
    // Regiuni
    {
      name: 'Bali',
      imagePath: 'bali.png',
      description:
        'A beautiful Indonesian island known for its forested volcanic mountains and iconic rice paddies.',
      propertiesCount: 120,
      searchCount: 250,
      type: 'region',
    },
    {
      name: 'Patagonia',
      imagePath: 'patagonia.png',
      description:
        'A sparsely populated region at the southern end of South America, shared by Argentina and Chile.',
      propertiesCount: 80,
      searchCount: 150,
      type: 'region',
    },
    {
      name: 'Siberia',
      imagePath: 'siberia.png',
      description:
        'An extensive geographical region spanning much of Eurasia and North Asia.',
      propertiesCount: 50,
      searchCount: 90,
      type: 'region',
    },
    {
      name: 'Scandinavia',
      imagePath: 'scandinavia.png',
      description: 'A historical and geographical region in Northern Europe.',
      propertiesCount: 130,
      searchCount: 220,
      type: 'region',
    },
    {
      name: 'The Sahel',
      imagePath: 'sahel.png',
      description:
        'A region of Africa between the Sahara to the north and the Sudanian savanna to the south.',
      propertiesCount: 40,
      searchCount: 110,
      type: 'region',
    },

    // Orașe
    {
      name: 'Maldive',
      imagePath: 'maldive.png',
      description:
        'A tropical paradise of islands known for its crystal clear waters.',
      propertiesCount: 200,
      searchCount: 300,
      type: 'city',
    },
    {
      name: 'Tenerife',
      imagePath: 'tenerife.png',
      description:
        "The largest of Spain's Canary Islands, with a diverse range of attractions.",
      propertiesCount: 150,
      searchCount: 250,
      type: 'city',
    },
    {
      name: 'Kyoto',
      imagePath: 'kyoto.png',
      description:
        'A city on the island of Honshu, Japan, famous for its classical Buddhist temples.',
      propertiesCount: 175,
      searchCount: 290,
      type: 'city',
    },
    {
      name: 'Venice',
      imagePath: 'venice.png',
      description:
        'An Italian city known for its intricate canal system and rich history.',
      propertiesCount: 220,
      searchCount: 320,
      type: 'city',
    },
    {
      name: 'Dubai',
      imagePath: 'dubai.png',
      description:
        'A city known for luxury shopping, ultramodern architecture, and a lively nightlife scene.',
      propertiesCount: 300,
      searchCount: 400,
      type: 'city',
    },

    // Atracții
    {
      name: 'Grand Canyon',
      imagePath: 'grandcanyon.png',
      description:
        'A steep-sided canyon carved by the Colorado River in Arizona, USA.',
      propertiesCount: 100,
      searchCount: 200,
      type: 'attraction',
    },
    {
      name: 'Great Wall of China',
      imagePath: 'greatwall.png',
      description:
        'A series of fortifications made of stone, brick, and other materials.',
      propertiesCount: 90,
      searchCount: 180,
      type: 'attraction',
    },
    {
      name: 'Machu Picchu',
      imagePath: 'machupicchu.png',
      description:
        'A 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.',
      propertiesCount: 85,
      searchCount: 170,
      type: 'attraction',
    },
    {
      name: 'Eiffel Tower',
      imagePath: 'eiffel.png',
      description:
        'A wrought-iron lattice tower on the Champ de Mars in Paris, France.',
      propertiesCount: 250,
      searchCount: 500,
      type: 'attraction',
    },
    {
      name: 'Statue of Liberty',
      imagePath: 'statueofliberty.png',
      description:
        'A colossal neoclassical sculpture on Liberty Island in New York Harbor.',
      propertiesCount: 110,
      searchCount: 210,
      type: 'attraction',
    },
  ]

  await Destination.insertMany(destinations)
  console.log('Destinations seeded successfully!')
  mongoose.disconnect()
}

seedDestinations()
