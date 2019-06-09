import React from 'react'
import './Grid.css'
import Block from './Block'

// TODO: Overflow issues when grid's size is reduced.

// TODO: Block component is unnecessary, render each cell here and use css for styling.
function Grid({ entryMethod }) {
    return (
        <div className="grid">
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
            <Block entryMethod={entryMethod} />
        </div>
    )
}

export default Grid
