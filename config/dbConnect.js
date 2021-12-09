import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
      );
    }

    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    }
  } catch (ex) {
    console.error(ex.message);
  }
};

export default dbConnect;
