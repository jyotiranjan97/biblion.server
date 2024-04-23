import express from 'express';
import { MongoClient } from 'mongodb';
import { handleError } from './utils/error';
import { bookRouter } from './routes/bookRoutes';

const app: express.Application = express();

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  } finally {
    await client.close();
  }
}

connectToMongo();

app.use(handleError);

app.use('/api/v1', bookRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
