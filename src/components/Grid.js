import React from 'react'
import './Grid.css'
import Block from "./Block"

// TODO: Overflow issues when grid's size is reduced. 
function Grid() {
    return (
        <div className="grid">
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </div>
    )
}

export default Grid
