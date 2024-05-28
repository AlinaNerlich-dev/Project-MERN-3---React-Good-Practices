import { useState } from "react";
import Grid from "../components/TicTacToe/Grid";
import PlayerMessage from "../components/TicTacToe/PlayerMessage";
import PrimaryButton from "../components/Primary-button"
import DisabledContext from "../components/TicTacToe/context/DisabledContext";

const TicTacToe = () => {

  const Win_Conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard]= useState(
    [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  )
  // const board = board.flat();


  const [foxPlaying, setFoxPlaying] = useState(true);
  const [playerMessage, setPlayerMessage] = useState("🦊")
  const [buttonText, setButtonText] = useState("Start");
  const [showPlayerMessage, setShowPlayerMessage] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
 

  const handleClick = (boxIndex) =>{
    console.log(boxIndex)
    const updatedBoard = board.map((value, index) =>{
      if (index === boxIndex) {
        return foxPlaying === true ? "🦊": "🐸";
      } else {
        return value;
      }
    })
    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setFoxPlaying(!foxPlaying);
    if (foxPlaying){
      setPlayerMessage("🐸")
    } else {setPlayerMessage("🦊")}
    

  }

  const checkWinner = (board) =>{
    console.log(board)
    for (let i = 0; i < Win_Conditions.length; i++){
      const [x,y,z] = Win_Conditions[i];
      console.log(x,y,z)
      if (board[x] && board[x] === board[y] && board[y] === board[z]){ 
      console.log(board[x])
      return board[x]}
    }
  }


  const changeButton=()=>{
    buttonText === "Reset" ? setButtonText("Start") : setButtonText("Reset");
    setShowPlayerMessage(true)
    setButtonDisabled(false)
      setBoard(    [
        null, null, null,
        null, null, null,
        null, null, null,
      ])
      if (buttonText === "Reset"){
        setShowPlayerMessage(false);
        
      }
    }


  return (
    <div>
        {showPlayerMessage && <PlayerMessage player={playerMessage}  />}
        <DisabledContext.Provider value={{isButtonDisabled}}>
          <Grid board={board} onClick={handleClick} />
        </DisabledContext.Provider>
        <PrimaryButton buttonText={buttonText} onClick={changeButton}  />
    </div>
  )
}

export default TicTacToe