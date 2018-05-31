import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';

import 'assets/styles/styles.scss';

import * as reducers from 'store';

import Routes from './routes';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(applyMiddleware(middleware))
);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;
