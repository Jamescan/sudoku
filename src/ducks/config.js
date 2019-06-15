/*
 * action types
 */

export const TOGGLE_INPUT_TYPE = "TOGGLE_INPUT_TYPE";

/*
 * action creators
 */

export function toggleInputType() {
    return { type: TOGGLE_INPUT_TYPE };
}

const initialState = {
    usingPencilMarks: true
};

/*
 * reducer
 */

export function config(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_INPUT_TYPE: {
            return {
                ...state,
                usingPencilMarks: !state.usingPencilMarks
            };
        }
        default: {
            return state;
        }
    }
}
