import { useState } from "react";
import Square from "./square";


export default function Board({ xIsNext, squares, onPlay }) {
    // const[squares,setSquares] = useState(Array(9).fill(null));
    // const [xIsNext , setXIsNext] = useState(true);

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return ;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }

        // setSquares(nextSquares);
        // setXIsNext(!xIsNext)
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner === "Draw") {
        status="Draw!!!!"
    }
    else if (winner){
        status = "Winner is : " + squares[winner[0]];
    } 
    else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    const highlight = (winner,row,col) =>{
        if (winner && winner.includes(row * 3 + col)){
            return "red"
        }
        return ""
    }

    return (
        <div>
            <div className="status"><h2>{status}</h2></div>
            {/* <div>
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
        </div>
        <div>
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
        </div>
        <div>
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
            <Square value={squares[8]} onSquareClick={()=>handleClick(8 )} />
        </div> */}

            {Array.from({ length: 3 }, (_, row) => (
                <div key={row}>
                    {/* Create squares within each row using another loop */}
                    {Array.from({ length: 3 }, (_, col) => (
                        <Square
                            key={row * 3 + col}
                            value={squares[row * 3 + col]}
                            onSquareClick={() => handleClick(row * 3 + col)}
                            // bgcolor={winner && winner.includes(row * 3 + col)?"red":""}
                            highlightColor={highlight(winner,row,col)}
                        />
                    ))}
                </div>
            ))}


        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    // console.log(squares)
    let null_squares = squares.filter(value => value===null).length;

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            console.log("Winner is : ", lines[i])
            return lines[i]
        }
        else if(null_squares===0){
            console.log(null_squares)
            return "Draw"
        }
    }
    return null;
}