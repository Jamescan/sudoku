import { connect } from "react-redux";
import { SettingsSelection } from "./SettingsSelection";
import { toggleAppMode, toggleEntryMethod } from "../../ducks/config";
import { clearAllCellValues, resetToOriginalCells } from "../../ducks/sudoku"; 

function mapStateToProps({ config: { isInSolveMode, isUsingPencilMarks }}) {
    return {
        isInSolveMode,
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    clearAllCellValues,
    resetToOriginalCells,
    toggleAppMode,
    toggleEntryMethod
};

const ConnectedSettingsSelection = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SettingsSelection);

export default ConnectedSettingsSelection;
