import React from 'react'
import Grid from './components/Grid'
import './App.css'

class App extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            currentEntryMethod: 'pencilMarks', // or "pencilMarks"
        }
    }

    handleClick(value) {
        this.setState({
            currentEntryMethod: value,
        })
    }

    render() {
        const { currentEntryMethod } = this.state
        return (
            <div className="app">
                <div className="header">
                    <button onClick={() => this.handleClick('numbers')}>
                        Big
                    </button>
                    <button onClick={() => this.handleClick('pencilMarks')}>
                        Little
                    </button>
                </div>
                <Grid entryMethod={currentEntryMethod} />
            </div>
        )
    }
}

export default App
