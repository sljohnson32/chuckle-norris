import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import Jokes from './components/Jokes/Jokes';
import Settings from './components/Settings/Settings';
import Favs from './components/Favs/Favs';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Jokes} />
      <Route path="favorites" component={Favs} />
      <Route path="settings" component={Settings} />
    </Route>
    <Route path='*' component={PageNotFound} />
  </Router>
, document.getElementById('application'));
