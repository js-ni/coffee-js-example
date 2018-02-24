import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import EventPage from './components/EventPage';

import registerServiceWorker from './registerServiceWorker';

import {
  createBrowserRouter,
  HttpError,
  makeRouteConfig,
  Redirect,
  Route,
} from 'found';

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route
      path="/"
      Component={App}
    >

      <Route
        Component={HomePage}
        path="/"
      />
      <Route
        Component={EventPage}
        path="/events"
      />


    </Route>,
  ),

  renderError: ({ error }) => (
    <div>
      {error.status === 404 ? ':(' : 'Error'}
    </div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));
registerServiceWorker();
