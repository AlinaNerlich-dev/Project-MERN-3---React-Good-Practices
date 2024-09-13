/* eslint-disable react/prop-types */
import "./SudokuSquare.css"

const Square = ({ value, onClick }) => {
  return (
    <button className="sudokuSquare" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;