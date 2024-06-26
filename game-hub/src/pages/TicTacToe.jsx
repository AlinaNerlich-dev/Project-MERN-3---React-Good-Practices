/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import "./TicTacToe.css";
import { calculateWinner } from "../utilities/functions";
import Grid from "../components/TicTacToe/Grid";
import PrimaryButton from "../components/Universal/Primary-button";
import { useReducer } from 'react';


const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  isTie: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      if (state.winner || state.board[action.index]) {
        return state;
      }
      const updatedBoard = state.board.slice();
      updatedBoard[action.index] = state.xIsNext ? '🦊' : '🐸';
      const newWinner = calculateWinner(updatedBoard);
      const isTie = !newWinner && updatedBoard.flat().every(cell => cell !== null);
      return {
        ...state,
        board: updatedBoard,
        xIsNext: !state.xIsNext,
        winner: newWinner,
        isTie,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}


const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)

  function handleClick(i) {
    dispatch({ type: 'MOVE', index: i });
  }

  function handleReset() {
    dispatch({ type: 'RESET' });
  }

  const winner = state.winner;
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (state.isTie) {
    status = 'It\'s a tie!';
  } else {
    status = 'Next player: ' + (state.xIsNext ? '🦊' : '🐸');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Grid board={state.board} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div id="result">{status}</div>
        <PrimaryButton buttonText={"Reset"} onClick={handleReset}/>
      </div>
    </div>
  );
}

export default TicTacToe;
