import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import {
    setCurrentNotation,
    toggleEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { checkValidSolution } from "../../ducks/sudoku";

function mapStateToProps({ config: { currentNotation, isInSolveMode, isUsingPencilMarks } }) {
    return {
        currentNotation,
        isInSolveMode,
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    checkValidSolution,
    setCurrentNotation,
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
