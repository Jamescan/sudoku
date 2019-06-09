import React from 'react'
import Cell from './Cell'
import './Block.css'

function Block({ entryMethod }) {
    return (
        <div className="block">
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
            <Cell entryMethod={entryMethod} />
        </div>
    )
}

export default Block
