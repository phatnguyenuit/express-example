import 'dotenv/config';

import models, { connectDb } from './models';

import bodyParser from 'body-parser';
import cors from 'cors';
import cowsay from 'cowsay-browser';
import express from 'express';
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
    me: await models.User.findByLogin('rwieruch')
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

      createUsersWithMessages();
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

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch'
  });

  const user2 = new models.User({
    username: 'ddavids'
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id
  });

  await user1.save();
  await user2.save();

  await message1.save();
  await message2.save();
  await message3.save();
};