import "./PlayerMessage.css"

// eslint-disable-next-line react/prop-types
const PlayerMessage = ({player}) => {
    console.log(player)
  return (
    <p id="playerMessage">-- Its {player}`s turn --</p>
  )
}

export default PlayerMessage