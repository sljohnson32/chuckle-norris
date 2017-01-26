import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import Jokes from './components/Jokes';
import Settings from './components/Settings';
import Favs from './components/Favs';
import { PageNotFound } from './components/PageNotFound';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="jokes" component={Jokes} />
      <Route path="favorites" component={Favs} />
      <Route path="settings" component={Settings} />
    </Route>
    <Route path='*' component={PageNotFound} />
  </Router>
, document.getElementById('application'));
