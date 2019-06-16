import { connect } from "react-redux";
import { App } from "./App";

const mapDispatchToProps = {};

const ConnectedApp = connect(
    null,
    mapDispatchToProps,
    null
)(App);

export default ConnectedApp;
