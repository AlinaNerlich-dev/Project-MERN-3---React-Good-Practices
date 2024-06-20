import './Navbar.css'
import Logo from "../pics/gamenight.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img id="logo" src={Logo} alt="Game Night Logo" />
      <ul>
        <Link to="/tictactoe"><li>Tic Tac Toe</li></Link>
        <Link to="/hangman"><li>Hangman</li></Link>
        <Link to="/sudoku"><li>Sudoku</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar