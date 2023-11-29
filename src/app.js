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

app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*')
  res.header(
    'Acces-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'

  );
});

routes(app);

export default app;
