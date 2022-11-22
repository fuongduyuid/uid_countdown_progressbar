import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware';
import createDebounce from 'redux-debounce';

import createRootReducer from './Reducers';

const history = createBrowserHistory();
const config = {
  simple: 275,
};
const debouncer = createDebounce(config);
const middleware = [
  thunk,
  routerMiddleware(history),
  promiseMiddleware,
  debouncer,
];
const initialState = {};

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'shopbase-shopify-integration',
});
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(createRootReducer(history), initialState, enhancer);

export { history };
export default store;
