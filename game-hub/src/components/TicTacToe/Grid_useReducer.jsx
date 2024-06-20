/* eslint-disable react/prop-types */
import Cell_useReducer from "./Cell_useReducer";
import "./Grid_useReducer.css"

const Grid_useReducer = ({grid}) => {
  return (
    <div id="grid-wrapper">
        <div>
          {grid.map((row, rowIdx) =>
            row.map((cell, colIdx) => (
               <Cell_useReducer key={`${colIdx}-${rowIdx}`} cell={cell} />
            )),
          )}
        </div>
      </div>
  )
}

export default Grid_useReducer
