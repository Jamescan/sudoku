import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import {
    setDifficulty,
    setEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { clearAllPencilMarks, getSudoku, selectIsSolved } from "../../ducks/sudoku";

function mapStateToProps({ config, sudoku }) {
    const { entryMethod, isInSolveMode } = config;
    const isSolved = selectIsSolved(sudoku);

    return {
        entryMethod,
        isInSolveMode,
        isSolved
    };
}

const mapDispatchToProps = {
    clearAllPencilMarks,
    getSudoku,
    setDifficulty,
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
