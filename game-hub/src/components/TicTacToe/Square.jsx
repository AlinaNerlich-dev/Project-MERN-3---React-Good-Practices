import "./Square.css"

const Square = ({value, onClick}) => {
  const style = value === "X" ? "square x" : "square o";

  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Square