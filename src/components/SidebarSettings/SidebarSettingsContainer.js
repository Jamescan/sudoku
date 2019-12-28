import { connect } from "react-redux";
import { SidebarSettings } from "./SidebarSettings";
import {
    selectIsUsingPencilMarks,
    setEntryMethod,
    toggleShowAllErrors,
    toggleShowObviousErrors
} from "../../ducks/config";
import { clearAllPencilMarks, getSudoku, selectIsSolved } from "../../ducks/sudoku";

function mapStateToProps({ config, sudoku }) {
    const { entryMethod, isInSolveMode, pencilMarkMethod } = config;
    const isSolved = selectIsSolved(sudoku);
    const isUsingPencilMarks = selectIsUsingPencilMarks(config);

    return {
        entryMethod,
        isInSolveMode,
        isSolved,
        isUsingPencilMarks,
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
