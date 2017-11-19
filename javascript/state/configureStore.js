import reducer from './reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
export default Redux.createStore(
    reducer,
    composeEnhancers(Redux.applyMiddleware(ReduxThunk.default))
);