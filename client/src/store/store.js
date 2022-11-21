import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

const sagaMiddleware = createSagaMiddlware();

const middleWares = [
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
