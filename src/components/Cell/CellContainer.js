import { connect } from "react-redux";
import { Cell } from "./Cell";
import { selectHasError, selectHasObviousError, updateCell } from "../../ducks/sudoku";

// mapStateToProps has root state as first argument, we destructure it
function mapStateToProps(
    { config: { isUsingPencilMarks, shouldShowAllErrors, shouldShowObviousErrors }, sudoku },
    ownProps
) {
    const hasError = selectHasError(sudoku, ownProps.index);
    const hasObviousError = selectHasObviousError(sudoku, ownProps.index);

    return {
        isUsingPencilMarks,
        shouldHighlightError:
            (hasError && shouldShowAllErrors) || (hasObviousError && shouldShowObviousErrors)
    };
}

const mapDispatchToProps = {
    updateCell
};

const ConnectedCell = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Cell);

export default ConnectedCell;
