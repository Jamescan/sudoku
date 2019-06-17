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
    // cells: Array(81).fill("")
    cells: [
        "",
        "4",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "1",
        "",
        "",
        "7",
        "",
        "",
        "3",
        "",
        "5",
        "",
        "",
        "",
        "",
        "1",
        "",
        "",
        "",
        "",
        "",
        "",
        "9",
        "",
        "8",
        "",
        "",
        "5",
        "",
        "",
        "",
        "5",
        "",
        "",
        "1",
        "",
        "6",
        "",
        "",
        "",
        "",
        "4",
        "2",
        "",
        "",
        "",
        "7",
        "9",
        "",
        "",
        "",
        "6",
        "",
        "",
        "",
        "",
        "2",
        "",
        "",
        "",
        "",
        "8",
        "",
        "",
        "",
        "",
        "",
        "",
        "5",
        "",
        "",
        "9",
        "7",
        "8"
    ]
};

/*
 * reducer
 */
export function sudoku(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CELL: {
            const { index: indexToUpdate, value: newValue } = action;
            const updatedCells = state.cells.map((cellValue, index) => {
                const isCellToUpdate = index === indexToUpdate;
                if (isCellToUpdate) {
                    const isSameValue = cellValue === newValue;
                    return isSameValue ? "" : newValue;
                }
                return cellValue;
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
