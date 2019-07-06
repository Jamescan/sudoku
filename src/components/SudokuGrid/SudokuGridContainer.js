import { connect } from "react-redux";
import { SudokuGrid } from "./SudokuGrid";

function mapStateToProps({ sudoku: { cells } }) {
    return {
        cells
    };
}

const ConnectedSudokuGrid = connect(
    mapStateToProps,
    null,
    null
)(SudokuGrid);

export default ConnectedSudokuGrid;
