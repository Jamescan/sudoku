import { connect } from "react-redux";
import { App } from "./App";

// mapStateToProps has root state as argument, we destructure it
function mapStateToProps({ sudoku }) {
    const { cells } = sudoku;
    return {
        cells
    };
}

const mapDispatchToProps = {};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(App);

export default ConnectedApp;
