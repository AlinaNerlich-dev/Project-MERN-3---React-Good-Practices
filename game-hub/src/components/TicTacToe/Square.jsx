/* eslint-disable react/prop-types */
import "./Square.css"
import DisabledContext from "./context/DisabledContext"
import { useContext } from "react";

const Square = ({value, onClick}) => {
  const style = value === "🦊" ? "square x" : "square o";
  const {isButtonDisabled} = useContext(DisabledContext);
  (console.log(isButtonDisabled))
  return (
    <button className={style} onClick={onClick} disabled={isButtonDisabled}>{value}</button>
  )
}

export default Square