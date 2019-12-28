import { connect } from "react-redux";
import { PrimarySettings } from "./PrimarySettings";
import {
    selectIsUsingPencilMarks,
    toggleAppMode,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { clearAllCellValues, resetToOriginalCells } from "../../ducks/sudoku";

function mapStateToProps({ config }) {
    const { isInSolveMode } = config;
    
    const isUsingPencilMarks = selectIsUsingPencilMarks(config);
    
    return {
        isInSolveMode,
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    clearAllCellValues,
    resetToOriginalCells,
    toggleAppMode,
    toggleShowAllErrors,
    toggleShowObviousErrors
};

const ConnectedPrimarySettings = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(PrimarySettings);

export default ConnectedPrimarySettings;
