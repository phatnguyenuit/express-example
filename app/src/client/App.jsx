import ErrorBoundary from './components/ErrorBoundry';
import Footer from './components/Footer';
import Header from './components/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route, basePath = '/' }) => {
  return (
    <div>
      <Header basePath={basePath} />
      <div className='container'>
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: {}
};

export default {
  component: App
};
