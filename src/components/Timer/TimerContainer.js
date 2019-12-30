import { connect } from "react-redux";
import { Timer } from "./Timer";

function mapStateToProps({ config: { isInSolveMode } }) {
    return {
        shouldStart: isInSolveMode
    };
}

export const ConnectedTimer = connect(
    mapStateToProps,
    null,
    null
)(Timer);
