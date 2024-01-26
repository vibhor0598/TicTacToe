import { useState } from "react"
import Board from "./Board"
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove%2 ===0;
    const currentSquares = history[currentMove ]

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
        // setXIsNext(!xIsNext);
    }

    const jumpTo = (nextMove) => { 
        setCurrentMove(nextMove);
        // setXIsNext(nextMove%2 ===0)
    }

    const moves = history.map((squares,move) => {
        let description;
        if (move>0){
            description = 'go to move #' + move;
        } else{
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button style={{margin : "5px"}} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    const reset = () => {
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
    }



    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
            <button style ={{margin:"25px 100px", width:"100px" , height:"50px"}}onClick={reset}>Reset</button>
                <ol>{moves}</ol>
            </div>
        </div>

    )
}