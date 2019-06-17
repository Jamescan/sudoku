/*
 * action types
 */
export const TOGGLE_ENTRY_METHOD = "TOGGLE_ENTRY_METHOD";
export const TOGGLE_SHOW_ALL_ERRORS = "TOGGLE_SHOW_ALL_ERRORS";
export const TOGGLE_SHOW_OBVIOUS_ERRORS = "TOGGLE_SHOW_OBVIOUS_ERRORS";

/*
 * action creators
 */
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
    isUsingPencilMarks: true,
    shouldShowAllErrors: false,
    shouldShowObviousErrors: false
};

/*
 * reducer
 */
export function config(state = initialState, action) {
    switch (action.type) {
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
