import 'dotenv/config';
import 'express-async-errors';

import express from 'express';

import { exceptionsMiddleware } from './middlewares/exceptionsMiddleware';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(exceptionsMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running in port ${port}`));
