import "dotenv/config";
import app from './src/app.js';
import cors from 'cors';

const PORT = 3001;

app.use(cors());

app.listen(PORT, () => {
  console.log('Executando');
});