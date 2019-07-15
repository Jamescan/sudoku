import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import {
    toggleEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { clearAllPencilMarks, getSudoku, selectIsSolved } from "../../ducks/sudoku";

function mapStateToProps({ config: { isInSolveMode, isUsingPencilMarks }, sudoku }) {
    const isSolved = selectIsSolved(sudoku);

    return {
        isInSolveMode,
        isSolved,
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
