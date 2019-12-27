import { connect } from "react-redux";
import { Cell } from "./Cell";
import {
    addCellValue,
    selectHasError,
    selectHasObviousError,
    selectIsOriginalCell,
    selectPencilMarks,
    updateCellValue,
    updateCellPencilMark
} from "../../ducks/sudoku";
import { toggleEntryMethod, togglePencilMarkMethod } from "../../ducks/config";

// TODO: Split Cell into FixedCell and VariableCell or something.

// mapStateToProps has root state as first argument, we destructure it
function mapStateToProps(
    {
        config: {
            isInSolveMode,
            isUsingPencilMarks,
            pencilMarkMethod,
            shouldShowAllErrors,
            shouldShowPencilMarks,
            shouldShowObviousErrors
        },
        sudoku
    },
    ownProps
) {
    const cellIndex = ownProps.index;
    const hasError = selectHasError(sudoku, cellIndex);
    const hasObviousError = selectHasObviousError(sudoku, cellIndex);
    const isOriginalCell = selectIsOriginalCell(sudoku, cellIndex);
    const pencilMarks = selectPencilMarks(sudoku, cellIndex);

    return {
        isFixed: isInSolveMode && isOriginalCell,
        isInSolveMode,
        isUsingPencilMarks,
        pencilMarks,
        pencilMarkMethod,
        shouldHighlightError:
            (hasError && shouldShowAllErrors) || (hasObviousError && shouldShowObviousErrors),
        shouldShowPencilMarks
    };
}

const mapDispatchToProps = {
    addCellValue,
    toggleEntryMethod,
    togglePencilMarkMethod,
    updateCellValue,
    updateCellPencilMark
};

const ConnectedCell = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Cell);

export default ConnectedCell;
