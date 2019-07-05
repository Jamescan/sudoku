import { connect } from "react-redux";
import { SudokuGrid } from "./SudokuGrid";

// mapStateToProps has root state as argument, we destructure it
function mapStateToProps({ config: { isInSolveMode }, sudoku: { cells } }) {
    return {
        cells,
        isInSolveMode
    };
}

const mapDispatchToProps = {};

const ConnectedSudokuGrid = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SudokuGrid);

export default ConnectedSudokuGrid;
