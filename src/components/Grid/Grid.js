import React from 'react'
import './Grid.css'
import Cell from '../Cell/Cell'

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

// grid should take a prop "contents" which defaults to an empty array of 81 strings.
function Grid({ entryMethod }) {
    const cellData = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    return (
        <div className="grid">
            {cellData.map(cellDatum => {
                // todo: actually use this prop in Cell.
                return <Cell data={cellDatum} entryMethod={entryMethod} />
            })}
        </div>
    )
}

export default Grid
