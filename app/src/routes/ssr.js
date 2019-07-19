import App from '../client/App';
import React from 'react';
import configRoutes from '../client/routes';
import createStore from '../store/createStore';
import express from 'express';
import hbs from 'handlebars';
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import renderer from '../helpers/renderer';

// https://github.com/ilkeraltin/react-ssr-news

const router = express.Router();

router.get('*', async (req, res) => {
  // const params = req.params[0].split('/');
  const id = 1;
  const store = createStore();
  const routes = matchRoutes(configRoutes, req.path);

  console.log(routes);

  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, id) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(reject);
        });
      }
      return null;
    });
  try {
    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);

      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    });
  } catch (error) {
    res.send('Error occurs when getting page.');
  }
});
export default router;
