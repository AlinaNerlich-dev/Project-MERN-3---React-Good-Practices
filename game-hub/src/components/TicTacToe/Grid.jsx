/* eslint-disable react/prop-types */
import Square from "./Square";
import "./Grid.css"

const Grid = ({ board, onClick }) => {
  function renderSquare(i) {
    return <Square key={i} value={board[i]} onClick={() => onClick(i)} />;
  } 

  return (
    <div id="grid">
      {board.map((_, i) => renderSquare(i))}
    </div>
  );
}

export default Grid;