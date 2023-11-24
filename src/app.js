import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectToDatabase();

connect.on('error', (error) => {
  console.error('connection error', error);
})

connect.once('open', () => {
  console.log('success connection');
})

const app = express();

routes(app);

export default app;
