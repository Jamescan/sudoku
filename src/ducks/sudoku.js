/*
 * action types
 */
export const UPDATE_CELL = "UPDATE_CELL";

/*
 * action creators
 */
export function updateCell(index, value) {
    return { type: UPDATE_CELL, index, value };
}

const initialState = {
    cells: Array(81).fill("")
};

/*
 * reducer
 */
export function sudoku(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CELL: {
            const { index: actionIndex, value } = action;
            const updatedCells = state.cells.map((cell, index) => {
                if (index === actionIndex) {
                    if (cell === value) {
                        return "";
                    }
                    return value;
                }
                return cell;
            });
            return {
                ...state,
                cells: updatedCells
            };
        }
        default: {
            return state;
        }
    }
}
