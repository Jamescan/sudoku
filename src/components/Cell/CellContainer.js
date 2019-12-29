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
import {
    selectIsUsingPencilMarks,
    selectShouldShowPencilMarks,
    toggleEntryMethod
} from "../../ducks/config";

// TODO: Split Cell into FixedCell and VariableCell or something.

function mapStateToProps({ config, sudoku }, ownProps) {
    const {
        entryMethod,
        isInSolveMode,
        pencilMarkMethod,
        shouldShowAllErrors,
        shouldShowObviousErrors
    } = config;
    const cellIndex = ownProps.index;
    const hasError = selectHasError(sudoku, cellIndex);
    const hasObviousError = selectHasObviousError(sudoku, cellIndex);
    const isOriginalCell = selectIsOriginalCell(sudoku, cellIndex);
    const pencilMarks = selectPencilMarks(sudoku, cellIndex);
    const isUsingPencilMarks = selectIsUsingPencilMarks(config);

    return {
        entryMethod,
        isFixed: isInSolveMode && isOriginalCell,
        isInSolveMode,
        isUsingPencilMarks,
        pencilMarks,
        pencilMarkMethod,
        shouldHighlightError:
            (hasError && shouldShowAllErrors) || (hasObviousError && shouldShowObviousErrors),
        shouldShowPencilMarks: selectShouldShowPencilMarks(config)
    };
}

const mapDispatchToProps = {
    addCellValue,
    toggleEntryMethod,
    updateCellValue,
    updateCellPencilMark
};

const ConnectedCell = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Cell);

export default ConnectedCell;
