import { useState } from "react";
import "./TicTacToe.css"
import PrimaryButton from "../components/Primary-button";
import PlayerMessage from "../components/TicTacToe/PlayerMessage";
import Grid from "../components/TicTacToe/Grid";


const TicTacToe = () => {
  const startButton = document.getElementsByClassName("startButton");

  const players = ["🦊", "🐸"];
  const [isStarted, setIsStarted] = useState(false);
  let [player, setPlayer] = useState();

  if (player == "🦊"){
    
  }

  const[isFoxNext,setIsFoxNext] = useState()

  if(isStarted){
    startButton[0]?.addEventListener('click', resetGame)
  }

  function resetGame(){
    startGame();
  }

  function startGame() {
    let player = players[Math.floor(Math.random() * players.length)];
    setPlayer(player);
    setIsStarted(true);
  }


  return (
    <div>
      <h1>Tic Tac Toe </h1>
      <h3>Choose if you want to be 🦊 or 🐸 - then press Start</h3>
      {player && <PlayerMessage player={player} />}
      {player && <Grid player={player}/>}
      <div id="tictactoeButton">
        <PrimaryButton class="startButton" buttonText="Let's play" onClick={startGame} />
      </div>
    </div>
  );
};

export default TicTacToe;
