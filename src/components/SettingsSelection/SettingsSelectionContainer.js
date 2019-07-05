import { connect } from "react-redux";
import { SettingsSelection } from "./SettingsSelection";
import { toggleEntryMethod } from "../../ducks/config";

function mapStateToProps({ config: { isUsingPencilMarks } }) {
    return {
        isUsingPencilMarks
    };
}

const mapDispatchToProps = {
    toggleEntryMethod
};

const ConnectedSettingsSelection = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(SettingsSelection);

export default ConnectedSettingsSelection;
