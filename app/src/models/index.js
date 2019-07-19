import Message from './message';
import User from './user';
import mongoose from 'mongoose';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
};

const models = { User, Message };

export { connectDb };
export default models;
