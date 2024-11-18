import { useState } from "react"
function Square({value, onSquareClick}) {


  return <button className="square" onClick={onSquareClick}>{value}</button>
}

function Board() {
  const [squaresCondition, setSquaresCondition] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)

 function handleClick(arrayIndex) {
  if (squaresCondition[arrayIndex] || calculateWinner(squaresCondition)) return;

    const newSquares = squaresCondition.slice();

    newSquares[arrayIndex] = (xIsNext) ? 'X' : 'O'
    setSquaresCondition(newSquares)
    setXIsNext(!xIsNext)
  }

  const isWinner = calculateWinner(squaresCondition);

  let status =''
  if (isWinner) {
    status = "Winner: " + isWinner
  } else {
    status = "Next player is: " + (xIsNext ? 'X' : 'O')
  }



  return (
    <>
    <div className="status">{status}</div>
    
    <div className="board">
  <Square value={squaresCondition[0]} onSquareClick={() =>  handleClick(0)}/>
  <Square value={squaresCondition[1]} onSquareClick={() =>  handleClick(1)}/>
  <Square value={squaresCondition[2]} onSquareClick={() =>  handleClick(2)}/>
  <Square value={squaresCondition[3]} onSquareClick={() =>  handleClick(3)}/>
  <Square value={squaresCondition[4]} onSquareClick={() =>  handleClick(4)}/>
  <Square value={squaresCondition[5]} onSquareClick={() =>  handleClick(5)}/>
  <Square value={squaresCondition[6]} onSquareClick={() =>  handleClick(6)}/>
  <Square value={squaresCondition[7]} onSquareClick={() =>  handleClick(7)}/>
  <Square value={squaresCondition[8]} onSquareClick={() =>  handleClick(8)}/>
    </div>
    </>
  )
}

export default function Game() {
  return (
    <>
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{/* TODO */}</ol>
      </div>
    </div>
    </>
  )
}

function calculateWinner(squaresCondition) {
const lines = [
  [0,1,2], 
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

for (let rules = 0; rules < lines.length; rules++) {
  const [a,b,c] = lines[rules];

  if (squaresCondition[a] === squaresCondition[b] && squaresCondition[b] === squaresCondition[c]) {
    return squaresCondition[a]
  }

  console.log(squaresCondition)
  console.log(lines[rules])

} 
return false
}

