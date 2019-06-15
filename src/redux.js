import { createStore, combineReducers } from "redux";
import { config } from "./ducks/config";

const sudokuApp = combineReducers({
    config
});

export const store = createStore(sudokuApp);
