import { useState } from "react"


export default function Square({ value, onSquareClick, highlightColor }) {
    return (
        <button className="square"
            onClick={onSquareClick}
            style={{ backgroundColor: highlightColor }}>
            {value}
        </button>
    )
}