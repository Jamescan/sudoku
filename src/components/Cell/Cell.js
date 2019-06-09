import React from 'react'
import './Cell.css'
import PencilMarkGrid from '../PencilMarkGrid/PencilMarkGrid'

// todo: finish implementing non-pencil-mark entry method
class Cell extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    // Update the "big number" in the cell. TODO: finish implementing this.
    updateCellValue(number) {
        const { value: cellValue } = this.state
        const newCellValue = cellValue === number ? null : number
        this.setState({
            value: newCellValue,
        })
    }

    render() {
        const { entryMethod, value } = this.props

        if (value != '') {
            return (
                // TODO: at some point we'll need to distinguish between fixed values (given from puzzle) and user-inputted values that can be deleted.
                <div className="cell">
                    <div className="valueWrapper">{value}</div>
                </div>
            )
        }

        const canInputPencilMarks = entryMethod === 'pencilMarks'
        return (
            <div className="cell">
                <PencilMarkGrid />
            </div>
        )
    }
}

export default Cell
