import mongoose, { mongo } from "mongoose";

async function connectToDatabase() {
  mongoose.connect(process.env.DB_CONNECTION);

  return mongoose.connection;
};

export default connectToDatabase;
