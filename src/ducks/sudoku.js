import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { of } from "rxjs";

/*
 * action types
 */

/* User enters a number into a cell for the first time, in Capture mode */
export const ADD_CELL_VALUE = "ADD_CELL_VALUE";

/* User enters a number into a cell in Solve mode */
export const UPDATE_CELL_VALUE = "UPDATE_CELL_VALUE";
export const UPDATE_CELL_PENCIL_MARK = "UPDATE_CELL_PENCIL_MARK";

export const CLEAR_ALL_CELL_VALUES = "CLEAR_ALL_CELL_VALUES";
export const CLEAR_ALL_PENCIL_MARKS = "CLEAR_ALL_PENCIL_MARKS";
export const RESET_TO_ORIGINAL_CELLS = "RESET_TO_ORIGINAL_CELLS";

/* todo */
export const CHECK_VALID_SOLUTION = "CHECK_VALID_SOLUTION";
export const CHECK_VALID_SOLUTION_SUCCESS = "CHECK_VALID_SOLUTION_SUCCESS";


/*
 * action creators
 */

export function addCellValue(index, value) {
    return { type: ADD_CELL_VALUE, index, value };
}

export function checkValidSolution() {
    return { type: CHECK_VALID_SOLUTION };
}

export function checkValidSolutionSuccess() {
    return { type: CHECK_VALID_SOLUTION_SUCCESS };
}

export function clearAllCellValues() {
    return { type: CLEAR_ALL_CELL_VALUES };
}

export function clearAllPencilMarks() {
    return { type: CLEAR_ALL_PENCIL_MARKS };
}

export function resetToOriginalCells() {
    return { type: RESET_TO_ORIGINAL_CELLS };
}

export function updateCellValue(index, value) {
    return { type: UPDATE_CELL_VALUE, index, value };
}

export function updateCellPencilMark(index, pencilMark) {
    return { type: UPDATE_CELL_PENCIL_MARK, index, pencilMark };
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
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "4"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "3"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],        
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "8"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "1"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "6"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "4"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "2"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "6"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "2"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "8"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "5"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: false,
            pencilMarks: [],
            value: ""
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "9"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "7"
        },
        {
            hasError: false,
            hasObviousError: false,
            isOriginalValue: true,
            pencilMarks: [],
            value: "8"
        }
    ]
};

/*
 * Reducer Utils
 */
// Returns true if there is an error with the new cell value
function checkForErrorByIndex(state, index, newValue) {
    return state.solution[index] !== newValue;
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

// TODO: Obviously a better algorithm exists for this...
function getValuesInSameBlockByIndex(cells, index) {
    const row = Math.floor(index / 9);
    const column = index % 9;

    let rowIndicesToGet = [];
    if (row === 0 || row === 1 || row === 2) {
        rowIndicesToGet = [0, 1, 2];
    }
    else if (row === 3 || row === 4 || row === 5) {
        rowIndicesToGet = [3, 4, 5];
    }
    else { // if (row === 6 || row === 7 || row === 8) {
        rowIndicesToGet = [6, 7, 8]
    }

    let columnIndicesToGet = [];
    if (column === 0 || column === 1 || column === 2) {
        columnIndicesToGet = [0, 1, 2];
    }
    else if (column === 3 || column === 4 || column === 5) {
        columnIndicesToGet = [3, 4, 5];
    }
    else { // if (column === 6 || column === 7 || column === 8) {
        columnIndicesToGet = [6, 7, 8]
    }

    let values = [];
    rowIndicesToGet.forEach(rowIndex => {
        columnIndicesToGet.forEach(columnIndex => {
            values.push(cells[rowIndex * 9 + columnIndex]);
        });
    });

    return values;
}

/**
 * Generates and returns a copy of an array with a newItem at a specified index.
 * (No mutation / side effects!)
 * 
 * @param array - array to which we wish to add the newItem
 * @param index - index of the array at which we wish to add the newItem
 * @param newItem - the new value to add to the array
 * @returns arr - new array with newItem at index
 */
function safelyUpdateArrayByIndex(array, index, newItem) {
    return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
}


function checkForObviousErrorByIndex(state, index, newValue) {
    const obviousCells = [
        ...getValuesInSameBlockByIndex(state.cells, index),
        ...getValuesInSameColumnByIndex(state.cells, index),
        ...getValuesInSameRowByIndex(state.cells, index)
    ];

    return !!obviousCells.find(cell => cell.value === newValue && newValue !== "");
}

/*
 * reducer
 */
export function sudoku(state = initialState, action) {
    switch (action.type) {
        case ADD_CELL_VALUE: {
            const { index, value: newValue } = action;

            const cellToUpdate = state.cells[index];

            // TODO: Should have a utility like getDefaultCell() or something
            // so we don't need to keep track of default values across many functions.
            const newCell = {
                ...cellToUpdate,
                value: newValue,
                hasObviousError: false,
                hasError: false
            };

            const newCells = safelyUpdateArrayByIndex(state.cells, index, newCell);

            return {
                ...state,
                cells: newCells
            };
        }

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
            const newCells = state.cells.map(cell => ({
                ...cell,
                pencilMarks: []
            }));

            return {
                ...state,
                cells: newCells
            };
        }
        case RESET_TO_ORIGINAL_CELLS: {
            const newCells = state.cells.map(cell => {
                if (!cell.isOriginalValue) {
                    return {
                        ...cell,
                        value: "",
                        hasObviousError: false,
                        hasError: false
                    };
                }
                return cell;
            });

            return {
                ...state,
                cells: newCells
            };
        }
        case UPDATE_CELL_VALUE: {
            const { index, value: newValue } = action;

            const cellToUpdate = state.cells[index];
            const shouldClearCellValue = cellToUpdate.value === newValue;

            const hasObviousError = checkForObviousErrorByIndex(state, index, newValue);
            const hasError = checkForErrorByIndex(state, index, newValue);

            // TODO: Probably should have a separate DELETE_CELL or something
            const newCell = {
                ...cellToUpdate,
                value: shouldClearCellValue ? "" : newValue,
                hasObviousError: shouldClearCellValue ? false : hasObviousError,
                hasError: shouldClearCellValue ? false : hasError
            };

            const newCells = safelyUpdateArrayByIndex(state.cells, index, newCell);

            return {
                ...state,
                cells: newCells
            };
        }
        case UPDATE_CELL_PENCIL_MARK: {
            const { index, pencilMark: pencilMarkToUpdate } = action;

            // todo: utility for updating a cell from an array? This logic is repeated 
            const updatedPencilMarks = state.cells[index].pencilMarks.includes(pencilMarkToUpdate)
            ? state.cells[index].pencilMarks.filter(pencilMark => pencilMark !== pencilMarkToUpdate)
            : [...state.cells[index].pencilMarks, pencilMarkToUpdate];

            const newCell = {
                ...state.cells[index],
                pencilMarks: updatedPencilMarks
            };
            
            const newCells = safelyUpdateArrayByIndex(state.cells, index, newCell);
            return {
                ...state,
                cells: newCells
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

export function selectPencilMarks(state, index) {
    return state.cells[index].pencilMarks;
}

export const checkValidSolutionEpic = action$ =>
    action$.pipe(
        ofType(CHECK_VALID_SOLUTION),
        // eslint-disable-next-line no-unused-vars
        mergeMap(action => of(checkValidSolutionSuccess()))
    );
