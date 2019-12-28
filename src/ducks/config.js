import { ENTRY_METHODS } from "../constants";

const { BIG, CORNER, CENTRAL } = ENTRY_METHODS;

/*
 * action types
 */
export const SET_ENTRY_METHOD = "SET_ENTRY_METHOD";
export const TOGGLE_APP_MODE = "TOGGLE_APP_MODE";
export const TOGGLE_SHOW_ALL_ERRORS = "TOGGLE_SHOW_ALL_ERRORS";
export const TOGGLE_SHOW_OBVIOUS_ERRORS = "TOGGLE_SHOW_OBVIOUS_ERRORS";

/*
 * action creators
 */
export function toggleAppMode() {
    return { type: TOGGLE_APP_MODE };
}

export function setEntryMethod(entryMethod) {
    return {
        type: SET_ENTRY_METHOD,
        entryMethod
    }
}

export function toggleShowAllErrors() {
    return { type: TOGGLE_SHOW_ALL_ERRORS };
}

export function toggleShowObviousErrors() {
    return { type: TOGGLE_SHOW_OBVIOUS_ERRORS };
}

const initialState = {
    entryMethod: BIG,
    isInSolveMode: false, // false implies "Capture" Mode
    shouldShowAllErrors: false,
    shouldShowObviousErrors: false,
};

/*
 * reducer
 */
export function config(state = initialState, action) {
    switch (action.type) {
        case SET_ENTRY_METHOD: {
            return {
                ...state,
                entryMethod: action.entryMethod,
            }
        }
        case TOGGLE_APP_MODE: {
            return {
                ...state,
                isInSolveMode: !state.isInSolveMode,
            };
        }
        case TOGGLE_SHOW_ALL_ERRORS: {
            return {
                ...state,
                shouldShowAllErrors: !state.shouldShowAllErrors
            };
        }
        case TOGGLE_SHOW_OBVIOUS_ERRORS: {
            return {
                ...state,
                shouldShowObviousErrors: !state.shouldShowObviousErrors
            };
        }
        default: {
            return state;
        }
    }
}

/* selectors */
export function selectIsUsingPencilMarks(state) {
    if (!state.isInSolveMode) {
        return false;
    }

    return state.entryMethod === CORNER || state.entryMethod === CENTRAL;
}

export function selectShouldShowPencilMarks(state) {
    return state.isInSolveMode;
}