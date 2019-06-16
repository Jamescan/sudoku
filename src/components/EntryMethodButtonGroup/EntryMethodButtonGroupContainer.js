import { connect } from "react-redux";
import { toggleEntryMethod } from "../../ducks/config";
import { EntryMethodButtonGroup } from "./EntryMethodButtonGroup";

function mapStateToProps({ config }) {
    const { isUsingPencilMarks } = config;
    return {
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    toggleEntryMethod
};

const ConnectedEntryMethodButtonGroup = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(EntryMethodButtonGroup);

export default ConnectedEntryMethodButtonGroup;
