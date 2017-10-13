import React from 'react';
import ReactGA from 'react-ga';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './App';

ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default () => (
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path={process.env.PUBLIC_URL + '/'} component={App}>
    </Route>
  </Router>
);