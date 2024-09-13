import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import Square from "../components/Sudoku/SudokuSquare.jsx";
import "./Sudoku.css"
let puzzle = makepuzzle();
let solution = solvepuzzle(puzzle);
let rate = ratepuzzle(puzzle, 4)
console.log(puzzle)
console.log(solution);
console.log(rate)

const Sudoku = () => {

  return (
    <>
      <h1>Sudoku</h1>
      <div id="sudokuGrid">
      {
        puzzle.map((num) =>{
          return <Square key={num} value={num} onClick={() => console.log(num)} />;
        })
      }
      </div>
     
    </>
  )
}

export default Sudoku