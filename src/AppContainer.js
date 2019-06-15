import { connect } from "react-redux";
import { toggleInputType } from "./ducks/config";
import { App } from "./App";

const mapDispatchToProps = {
    toggleInputType
};

const ConnectedApp = connect(
    null,
    mapDispatchToProps,
    null
)(App);

export default ConnectedApp;
