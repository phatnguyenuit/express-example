import 'dotenv/config';

import models, { connectDb } from './models';

import bodyParser from 'body-parser';
import cors from 'cors';
import cowsay from 'cowsay-browser';
import express from 'express';
import { initialDatabase } from './helpers/createFakeData';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.Promise = global.Promise;

const app = express();

// Application-Level Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('fast')
  };
  next();
});

// Routes
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.get('/', (req, res, next) => {
  res.send('Hello from ExpressJS');
});

const PORT = process.env.PORT || 4000;

let eraseDatabaseOnSync = false;
connectDb()
  .then(async () => {
    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({}),
        models.Message.deleteMany({})
      ]);

      initialDatabase();
    }

    app.listen(PORT, () => {
      const status = cowsay.say({
        text: `Server is running on port ${PORT}`,
        e: 'oO',
        T: 'U '
      });
      console.log(status);
    });
  })
  .catch(e => console.log(e));
