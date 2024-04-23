import express from 'express';
import { handleError } from './utils/error';
import { bookRouter } from './routes/bookRoutes';

const app: express.Application = express();

app.use(handleError);

app.use('/api/v1', bookRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
