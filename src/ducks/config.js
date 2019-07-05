/*
 * action types
 */
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

export function toggleEntryMethod() {
    return { type: TOGGLE_ENTRY_METHOD };
}

export function toggleShowAllErrors() {
    return { type: TOGGLE_SHOW_ALL_ERRORS };
}

export function toggleShowObviousErrors() {
    return { type: TOGGLE_SHOW_OBVIOUS_ERRORS };
}

const initialState = {
    isInSolveMode: false, // false implies "Capture" Mode
    isUsingPencilMarks: false,
    shouldShowAllErrors: false,
    shouldShowPencilMarks: false,
    shouldShowObviousErrors: false
};

/*
 * reducer
 */
export function config(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_APP_MODE: {
            // TODO: Clean up this logic... idea is to force isUsingPencilMarks to false
            // whenever we toggle from Solve to Capture mode, since Capture mode never uses pencilMarks.
            // Do similar for shouldShowPencilMarks.
            return {
                ...state,
                isInSolveMode: !state.isInSolveMode,
                isUsingPencilMarks: state.isInSolveMode ? false : state.isUsingPencilMarks,
                shouldShowPencilMarks: state.isInSolveMode ? false : true,
            };
        }
        case TOGGLE_ENTRY_METHOD: {
            return {
                ...state,
                isUsingPencilMarks: !state.isUsingPencilMarks
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
