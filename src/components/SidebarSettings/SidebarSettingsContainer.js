import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import {
    toggleEntryMethod,
    togglePencilMarkMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { clearAllPencilMarks, getSudoku, selectIsSolved } from "../../ducks/sudoku";

function mapStateToProps({ config: { isInSolveMode, isUsingPencilMarks, pencilMarkMethod }, sudoku }) {
    const isSolved = selectIsSolved(sudoku);

    return {
        isInSolveMode,
        isSolved,
        isUsingPencilMarks,
        pencilMarkMethod
    };
}

const mapDispatchToProps = {
    clearAllPencilMarks,
    getSudoku,
    toggleEntryMethod,
    togglePencilMarkMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
};

const ConnectedSidebarSettings = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SidebarSettings);

export default ConnectedSidebarSettings;
