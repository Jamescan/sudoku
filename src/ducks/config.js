import { DIFFICULTY_LEVELS, ENTRY_METHODS } from "../constants";

const { BIG, CORNER, CENTRAL } = ENTRY_METHODS;

/*
 * action types
 */
export const SET_DIFFICULTY = "SET_DIFFICULTY";
export const SET_ENTRY_METHOD = "SET_ENTRY_METHOD";
export const TOGGLE_APP_MODE = "TOGGLE_APP_MODE";
export const TOGGLE_ENTRY_METHOD = "TOGGLE_ENTRY_METHOD";
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
    };
}

export function toggleEntryMethod() {
    return {
        type: TOGGLE_ENTRY_METHOD
    };
}

export function toggleShowAllErrors() {
    return { type: TOGGLE_SHOW_ALL_ERRORS };
}

export function toggleShowObviousErrors() {
    return { type: TOGGLE_SHOW_OBVIOUS_ERRORS };
}

export function setDifficulty(level) {
    return {
        type: SET_DIFFICULTY,
        level
    };
}

const initialState = {
    difficulty: DIFFICULTY_LEVELS[0].label, // FIXME: hardcoding
    entryMethod: BIG,
    isInSolveMode: false, // false implies "Capture" Mode
    shouldShowAllErrors: false,
    shouldShowObviousErrors: false
};

/*
 * reducer
 */
export function config(state = initialState, action) {
    switch (action.type) {
        case SET_ENTRY_METHOD: {
            return {
                ...state,
                entryMethod: action.entryMethod
            };
        }
        case TOGGLE_APP_MODE: {
            return {
                ...state,
                isInSolveMode: !state.isInSolveMode
            };
        }
        case TOGGLE_ENTRY_METHOD: {
            // TODO: Elegant implementation
            const currentEntryMethod = state.entryMethod;
            let newEntryMethod;
            switch (currentEntryMethod) {
                case BIG: {
                    newEntryMethod = CENTRAL;
                    break;
                }
                case CENTRAL: {
                    newEntryMethod = CORNER;
                    break;
                }
                case CORNER: {
                    newEntryMethod = BIG;
                    break;
                }
                default: {
                    // eslint-disable-next-line no-console
                    console.error("Something is wrong.");
                }
            }

            return {
                ...state,
                entryMethod: newEntryMethod
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
        case SET_DIFFICULTY: {
            return {
                ...state,
                difficulty: action.level
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
