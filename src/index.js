import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/app';
import Loader from './components/loader'
import Main from './components/main'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Loader}/>
        <Route path="/main" component={Main}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
