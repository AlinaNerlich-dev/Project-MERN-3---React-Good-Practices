import { useState } from "react";
import Grid from "../components/TicTacToe/Grid";

const TicTacToe = () => {

  const [board, setBoard]= useState(
    [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  )
  const elements = board.flat();
  console.log(elements)

  const [foxPlaying, setFoxPlaying] = useState(true);

 

  const handleClick = (boxIndex) =>{
    const updatedBoard = elements.map((value, index) =>{
      if (index === boxIndex) {
        return foxPlaying === true ? "🦊": "🐸";
      } else {
        return value;
      }
    })
    setBoard(updatedBoard);
    setFoxPlaying(!foxPlaying);
  }



  return (
    <div>
        <Grid board={elements} onClick={handleClick} />
    </div>
  )
}

export default TicTacToe