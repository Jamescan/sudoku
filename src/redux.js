import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { config } from "./ducks/config";
import { getSolutionEpic, getSudokuEpic, sudoku } from "./ducks/sudoku";

export const rootReducer = combineReducers({
    config,
    sudoku
});

export const rootEpic = combineEpics(getSolutionEpic, getSudokuEpic);

const epicMiddleware = createEpicMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default store;
