import { connect } from "react-redux";
import { toggleShowAllErrors, toggleShowObviousErrors } from "../../ducks/config";
import { SolutionCheckingGroup } from "./SolutionCheckingGroup";

const mapDispatchToProps = {
    toggleShowAllErrors,
    toggleShowObviousErrors
};

const ConnectedSolutionCheckingGroup = connect(
    null,
    mapDispatchToProps,
    null
)(SolutionCheckingGroup);

export default ConnectedSolutionCheckingGroup;
