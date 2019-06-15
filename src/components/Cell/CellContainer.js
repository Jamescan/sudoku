import { connect } from "react-redux";
import { Cell } from "./Cell";

function mapStateToProps(state) {
    const { usingPencilMarks } = state.config;
    return {
        // usingPencilMarks: state.config.usingPencilMarks
        entryMethod: usingPencilMarks ? "pencilMarks" : "numbers"
    };
}

const ConnectedCell = connect(
    mapStateToProps,
    null,
    null
)(Cell);

export default ConnectedCell;
