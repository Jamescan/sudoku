import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import {
    toggleEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { clearAllPencilMarks, getSudoku } from "../../ducks/sudoku";

function mapStateToProps({ config: { isInSolveMode, isUsingPencilMarks } }) {
    return {
        isInSolveMode,
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    clearAllPencilMarks,
    getSudoku,
    toggleEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
};

const ConnectedSidebarSettings = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SidebarSettings);

export default ConnectedSidebarSettings;
