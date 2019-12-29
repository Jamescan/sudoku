import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import { setEntryMethod, toggleShowAllErrors, toggleShowObviousErrors } from "../../ducks/config";
import { clearAllPencilMarks, getSudoku, selectIsSolved } from "../../ducks/sudoku";

function mapStateToProps({ config, sudoku }) {
    const { entryMethod, isInSolveMode, pencilMarkMethod } = config;
    const isSolved = selectIsSolved(sudoku);

    return {
        entryMethod,
        isInSolveMode,
        isSolved,
        pencilMarkMethod
    };
}

const mapDispatchToProps = {
    clearAllPencilMarks,
    getSudoku,
    setEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
};

const ConnectedSidebarSettings = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SidebarSettings);

export default ConnectedSidebarSettings;
