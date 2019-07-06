import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";
import { config } from "./ducks/config";
import { checkValidSolutionEpic, sudoku } from "./ducks/sudoku";

export const rootReducer = combineReducers({
    config,
    sudoku
});

export const rootEpic = combineEpics(checkValidSolutionEpic);

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
/* eslint-enable */
