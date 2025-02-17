const mongoose = require('mongoose');
const uri = process.env.MONGODB_URL;
console.log(uri)
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    console.log("in this area")
    // If the connection is already open, return the existing connection
    return;
  }

  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('MongoDB connection error');
  }
}

module.exports = connectToDatabase;
