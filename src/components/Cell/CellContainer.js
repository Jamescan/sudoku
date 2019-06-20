import { connect } from "react-redux";
import { Cell } from "./Cell";
import { updateCell } from "../../ducks/sudoku";

// mapStateToProps has root state as argument, we destructure it
function mapStateToProps({ config: { isUsingPencilMarks } }) {
    return {
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    updateCell
};

const ConnectedCell = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Cell);

export default ConnectedCell;
