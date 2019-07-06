import { connect } from "react-redux";
import { SettingsSelection } from "./SettingsSelection";
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

const ConnectedSettingsSelection = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SettingsSelection);

export default ConnectedSettingsSelection;
