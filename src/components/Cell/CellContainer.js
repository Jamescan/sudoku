import { connect } from "react-redux";
import { Cell } from "./Cell";

// mapStateToProps has root state as argument, we destructure it
function mapStateToProps({ config }) {
    const { isUsingPencilMarks } = config;
    return {
        isUsingPencilMarks
    };
}

const ConnectedCell = connect(
    mapStateToProps,
    null,
    null
)(Cell);

export default ConnectedCell;
