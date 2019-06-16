import { createStore, combineReducers } from "redux";
import { config } from "./ducks/config";

const sudokuApp = combineReducers({
    config
});

/* eslint-disable no-underscore-dangle */
export const store = createStore(
    sudokuApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
