import models from '../models';
import mongoose from 'mongoose';
const fakeData = {
  rwieruch: {
    name: 'Robin Wieruch',
    login: 'rwieruch',
    messages: [
      {
        text: 'Published the Road to learn React'
      },

      {
        text: 'Happy to release ...'
      },
      {
        text: 'Published a complete ...'
      },

      {
        text: 'Getting started with GraphQL'
      }
    ]
  },
  ddavids: {
    name: 'Edgar Davids',
    login: 'ddavids',
    messages: [
      {
        text: 'Published the Road to learn Golang'
      },

      {
        text: 'Happy to read ...'
      },
      {
        text: 'Published a complete of fullstack MERN'
      },

      {
        text: 'Getting started with Nodejs'
      }
    ]
  },
  fast: {
    name: 'Phat Nguyen',
    login: 'fast',
    messages: [
      {
        text: 'Getting started with ReactJS'
      },

      {
        text: 'Happy to see you again ...'
      }
    ]
  }
};

export const initialDatabase = () => {
  Object.keys(fakeData).forEach(async name => {
    const userID = new mongoose.Types.ObjectId();
    const { login, name: username, messages: fakeMessages } = fakeData[name];
    const user = new models.User({
      username,
      login,
      _id: userID
    }).save();
    const messages = fakeMessages.map(({ text }) =>
      new models.Message({
        text,
        user: userID
      }).save()
    );
    await Promise.all([user, ...messages]);
  });
};
