import { useState, useEffect } from "react";
import "./TicTacToe.css";
import Grid from "../components/TicTacToe/Grid";
import PlayerMessage from "../components/TicTacToe/PlayerMessage";
import PrimaryButton from "../components/Primary-button";
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
    [2, 4, 6],
  ];

  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // const board = board.flat();

  const [foxPlaying, setFoxPlaying] = useState(true);
  const [playerMessage, setPlayerMessage] = useState("🦊");
  const [buttonText, setButtonText] = useState("Start");
  const [showPlayerMessage, setShowPlayerMessage] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [winner, setWinner] = useState();
  const [showWinnerMessage, setShowWinnerMessage] = useState(false);
  const [showTieMessage, setShowTieEssage] = useState(false);
  const [clicks, setClicks] = useState(1);

  let winnerEmoji = "";

  useEffect(() => {
    if (!winnerEmoji && clicks === 9) {
      setShowTieEssage(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicks]);

  const handleClick = (boxIndex) => {
    setClicks((clicks) => clicks + 1);

    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return foxPlaying === true ? "🦊" : "🐸";
      } else {
        return value;
      }
    });

    winnerEmoji = checkWinner(updatedBoard);

    setWinner(winnerEmoji);
    setBoard(updatedBoard);
    setFoxPlaying(!foxPlaying);

    if (winnerEmoji) {
      setShowWinnerMessage(true);
      setButtonDisabled(true);
      return winner;
    }

    if (foxPlaying) {
      setPlayerMessage("🐸");
    } else {
      setPlayerMessage("🦊");
    }
  };


  const checkWinner = (board) => {
    for (let i = 0; i < Win_Conditions.length; i++) {
      const [x, y, z] = Win_Conditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const changeButton = () => {

    if (buttonText === "Start"){
      setButtonText("Reset");
      setShowPlayerMessage(true);
      setButtonDisabled(false);
      setClicks(0);
    }

    if (buttonText === "Reset") {
      setBoard([null, null, null, null, null, null, null, null, null]);
      setButtonText("Start")
      setShowPlayerMessage(false);
      setShowWinnerMessage(false);
      setShowTieEssage(false);
      setButtonDisabled(true);
    }
  };

  return (
    <div>
      {showPlayerMessage ? (
        <PlayerMessage player={playerMessage} />
      ) : (
        <p className="playerMessage">Choose for Fox or Frog and press Start!</p>
      )}

      <DisabledContext.Provider value={{ isButtonDisabled }}>
        <Grid board={board} onClick={handleClick} />
      </DisabledContext.Provider>
      
      <PrimaryButton buttonText={buttonText} onClick={changeButton} />
      {showWinnerMessage && <p className="result">{winner} won!</p>}
      {showTieMessage && <p className="result">TIE - You have to Play again</p>}
    </div>
  );
};

export default TicTacToe;
