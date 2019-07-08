import { connect } from "react-redux";
import { PrimarySettings } from "./PrimarySettings";
import {
    toggleAppMode,
    toggleEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { checkValidSolution, clearAllCellValues, resetToOriginalCells } from "../../ducks/sudoku";

function mapStateToProps({ config: { isInSolveMode, isUsingPencilMarks } }) {
    return {
        isInSolveMode,
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    checkValidSolution,
    clearAllCellValues,
    resetToOriginalCells,
    toggleAppMode,
    toggleEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
};

const ConnectedPrimarySettings = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(PrimarySettings);

export default ConnectedPrimarySettings;