import express from 'express';
import { helloWorldRoute } from './routes';

const app: express.Application = express();

app.get('/', helloWorldRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
