/*
 * action types
 */
export const CLEAR_ALL_CELL_VALUES = "CLEAR_ALL_CELL_VALUES";
export const CLEAR_ALL_PENCIL_MARKS = "CLEAR_ALL_PENCIL_MARKS";
export const UPDATE_CELL = "UPDATE_CELL";

/*
 * action creators
 */

export function clearAllCellValues() {
    return { type: CLEAR_ALL_CELL_VALUES };
}

// todo: Will need pencil marks in redux state to implement
export function clearAllPencilMarks() {
    return { type: CLEAR_ALL_PENCIL_MARKS };
}

export function updateCell(index, value) {
    return { type: UPDATE_CELL, index, value };
}

const initialState = {
    // cells: Array(81).fill("")
    cells: [
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "4"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "3"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "8"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "6"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "4"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "2"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "6"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "2"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "8"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            value: "8"
        }
    ]
};

/*
 * reducer
 */
export function sudoku(state = initialState, action) {
    switch (action.type) {
        case CLEAR_ALL_CELL_VALUES: {
            const newCells = state.cells.map(cell => ({
                hasError: false,
                hasObviousError: false,
                value: ""
            }));

            return {
                ...state,
                cells: newCells
            }
        }
        case CLEAR_ALL_PENCIL_MARKS: {
            // todo: Will need pencil marks in redux state to implement
            return null;
        }
        case UPDATE_CELL: {
            const { index: indexToUpdate, value: newValue } = action;
            const updatedCells = state.cells.map((cell, index) => {
                const isCellToUpdate = index === indexToUpdate;
                if (isCellToUpdate) {
                    const isSameValue = cell.value === newValue;
                    const newCell = {
                        ...cell,
                        value: isSameValue ? "" : newValue
                    };
                    return newCell;
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

/*
 * selectors
 */

export function selectHasError(state, index) {
    return state.cells[index].hasError;
}

export function selectHasObviousError(state, index) {
    return state.cells[index].hasObviousError;
}
