import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { of } from "rxjs";

/*
 * action types
 */
export const CHECK_VALID_SOLUTION = "CHECK_VALID_SOLUTION";
export const CHECK_VALID_SOLUTION_SUCCESS = "CHECK_VALID_SOLUTION_SUCCESS";
export const CLEAR_ALL_CELL_VALUES = "CLEAR_ALL_CELL_VALUES";
export const CLEAR_ALL_PENCIL_MARKS = "CLEAR_ALL_PENCIL_MARKS";
export const RESET_TO_ORIGINAL_CELLS = "RESET_TO_ORIGINAL_CELLS";
export const UPDATE_CELL = "UPDATE_CELL";

/*
 * action creators
 */

export function checkValidSolution() {
    return { type: CHECK_VALID_SOLUTION };
}

export function checkValidSolutionSuccess() {
    return { type: CHECK_VALID_SOLUTION_SUCCESS };
}

export function clearAllCellValues() {
    return { type: CLEAR_ALL_CELL_VALUES };
}

// todo: Will need pencil marks in redux state to implement
export function clearAllPencilMarks() {
    return { type: CLEAR_ALL_PENCIL_MARKS };
}

export function resetToOriginalCells() {
    return { type: RESET_TO_ORIGINAL_CELLS };
}

export function updateCell(index, value) {
    return { type: UPDATE_CELL, index, value };
}

const initialState = {
    // cells: Array(81).fill("")
    solution: [
        8,
        4,
        6,
        2,
        5,
        3,
        7,
        1,
        9,
        1,
        9,
        2,
        7,
        4,
        6,
        3,
        8,
        5,
        5,
        3,
        7,
        8,
        1,
        9,
        4,
        2,
        6,
        4,
        2,
        9,
        6,
        8,
        7,
        1,
        5,
        3,
        7,
        8,
        5,
        3,
        9,
        1,
        2,
        6,
        4,
        3,
        6,
        1,
        4,
        2,
        5,
        8,
        9,
        7,
        9,
        7,
        8,
        1,
        6,
        4,
        5,
        3,
        2,
        2,
        5,
        3,
        9,
        7,
        8,
        6,
        4,
        1,
        6,
        1,
        4,
        5,
        3,
        2,
        9,
        7,
        8
    ].map(num => `${num}`),
    cells: [
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "4"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "3"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "8"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "6"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "4"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "2"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "6"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "2"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "8"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            value: "8"
        }
    ]
};

/*
 * reducer
 */
export function sudoku(state = initialState, action) {
    switch (action.type) {
        case CHECK_VALID_SOLUTION: {
            // todo
            return {
                ...state
            };
        }
        case CLEAR_ALL_CELL_VALUES: {
            const newCells = Array(81).fill({
                hasError: false,
                hasObviousError: false,
                value: ""
            });

            return {
                ...state,
                cells: newCells
            };
        }
        case CLEAR_ALL_PENCIL_MARKS: {
            // todo: Will need pencil marks in redux state to implement
            return null;
        }
        case RESET_TO_ORIGINAL_CELLS: {
            const newCells = state.cells.map(cell => {
                if (!cell.isOriginalValue) {
                    return {
                        ...cell,
                        value: ""
                    };
                }
                return cell;
            });

            return {
                ...state,
                cells: newCells
            };
        }
        case UPDATE_CELL: {
            const { index, value: newValue } = action;

            const cellToUpdate = state.cells[index];
            const shouldClearCellValue = cellToUpdate.value === newValue;

            // TODO: None of this error checking should be happening if we aren't in Solve mode...
            const hasObviousError = checkForObviousErrorByIndex(state, index, newValue);
            const hasError = checkForErrorByIndex(state, index, newValue);

            const newCell = {
                ...cellToUpdate,
                value: shouldClearCellValue ? "" : newValue,
                hasObviousError,
                hasError
            };

            return {
                ...state,
                cells: [...state.cells.slice(0, index), newCell, ...state.cells.slice(index + 1)]
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

export function selectIsOriginalCell(state, index) {
    return state.cells[index].isOriginalValue;
}

export const checkValidSolutionEpic = action$ =>
    action$.pipe(
        ofType(CHECK_VALID_SOLUTION),
        // eslint-disable-next-line no-unused-vars
        mergeMap(action => of(checkValidSolutionSuccess()))
    );

/*
 * Reducer Utils
 */
// Returns true if there is an error with the new cell value
function checkForErrorByIndex(state, index, newValue) {
    return state.solution[index] !== newValue;
}

function checkForObviousErrorByIndex(state, index, newValue) {
    const obviousCells = [
        ...getValuesInSameBlockByIndex(state.cells, index),
        ...getValuesInSameColumnByIndex(state.cells, index),
        ...getValuesInSameRowByIndex(state.cells, index)
    ];

    return !!obviousCells.find(cell => cell.value === newValue);
}

function getValuesInSameRowByIndex(cells, index) {
    const row = Math.floor(index / 9);
    const solutionValuesInRow = cells.slice(row * 9, row * 9 + 9);
    return solutionValuesInRow;
}

function getValuesInSameColumnByIndex(cells, index) {
    const column = index % 9;
    const solutionValuesInColumn = [
        cells[column],
        cells[column + 9],
        cells[column + 18],
        cells[column + 27],
        cells[column + 36],
        cells[column + 45],
        cells[column + 54],
        cells[column + 63],
        cells[column + 72]
    ];
    return solutionValuesInColumn;
}

function getValuesInSameBlockByIndex(cells, index) {
    return [];
}
