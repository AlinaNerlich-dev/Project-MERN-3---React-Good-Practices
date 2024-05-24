import { useState } from "react";
import "./TicTacToe.css"
import PrimaryButton from "../components/Primary-button";
import PlayerMessage from "../components/TicTacToe/PlayerMessage";
import Grid from "../components/TicTacToe/Grid";


const TicTacToe = () => {
  const players = ["🦊", "🐸"];
  let [player, setPlayer] = useState();

  function choosePlayer() {
    const player = players[Math.floor(Math.random() * players.length)];
    setPlayer(player);
  }
  return (
    <div>
      <h1>Tic Tac Toe </h1>
      <h3>Choose if you want to be 🦊 or 🐸 - then press Start</h3>
      {player && <PlayerMessage player={player} />}
      <Grid />
      <div id="tictactoeButton">
        <PrimaryButton buttonText="Start" onClick={choosePlayer} />
      </div>
    </div>
  );
};

export default TicTacToe;
