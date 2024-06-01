import "./PlayerMessage.css"

// eslint-disable-next-line react/prop-types
const PlayerMessage = ({player}) => {

  return (
    <>
    <p className="playerMessage"> -- Its {player}`s turn -- </p>
    </>
  )
}

export default PlayerMessage