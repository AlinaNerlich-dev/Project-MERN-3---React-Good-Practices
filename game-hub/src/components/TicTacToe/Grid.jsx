/* eslint-disable react/prop-types */
import Square from "./Square";
import "./Grid.css"

const Grid = ({board, onClick}) => {

  return (
    <div id="grid">
        {board.map((value, index)=>{
            return <Square key={index} value={value} onClick={() => value === null && onClick(index)} />
        })}
    </div>
  )
}

export default Grid