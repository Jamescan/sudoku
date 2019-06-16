/*
 * action types
 */
export const TOGGLE_ENTRY_METHOD = "TOGGLE_ENTRY_METHOD";

/*
 * action creators
 */
export function toggleEntryMethod() {
    return { type: TOGGLE_ENTRY_METHOD };
}

const initialState = {
    isUsingPencilMarks: true
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
        default: {
            return state;
        }
    }
}
