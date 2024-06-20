// import { useState, useEffect } from "react";
// import "./TicTacToe.css";
// import Grid from "../components/TicTacToe/Grid";
// import PlayerMessage from "../components/TicTacToe/PlayerMessage";
// import PrimaryButton from "../components/Primary-button";
// import DisabledContext from "../components/TicTacToe/context/DisabledContext";

// import { useReducer } from "react";

import Grid_useReducer from "../components/TicTacToe/Grid_useReducer";

function Game() {
  const grid = newTicTacToeGrid();
  return <Grid_useReducer grid={grid} />;
}

const newTicTacToeGrid = () => {
  return generateGrid(3,3, () => null)
}

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper))
}

export default function TicTacToe() {
  return (
    <div>
      <Game />
    </div>
  );
}

