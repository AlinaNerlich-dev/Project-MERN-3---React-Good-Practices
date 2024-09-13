import { useState, useEffect } from 'react';
import sudoku from 'sudoku';
import "./Sudoku.css";
import PrimaryButton from '../components/Universal/Primary-button';


const App = () => {
  const [sudokuBoard, setSudokuBoard] = useState(null);
  const [solvedBoard, setSolvedBoard] = useState(null);
  const [userBoard, setUserBoard] = useState(null);
  const [message, setMessage] = useState('');

  // Generate a new Sudoku puzzle when the component mounts
  useEffect(() => {
    const newBoard = sudoku.makepuzzle();
    const solved = sudoku.solvepuzzle(newBoard);
    setSudokuBoard(newBoard);
    setSolvedBoard(solved);
    setUserBoard(newBoard.slice());
  }, []);

  const handleChange = (index, value) => {
    const newBoard = [...userBoard];
    newBoard[index] = value ? parseInt(value, 10) - 1 : null; // Convert input to match 0-based array
    setUserBoard(newBoard);
  };

  const checkSolution = () => {
    // Compare user input with the solved board
    let isCorrect = true;
    for (let i = 0; i < solvedBoard.length; i++) {
      if (userBoard[i] !== solvedBoard[i]) {
        isCorrect = false;
        break;
      }
    }

    // Set appropriate message
    if (isCorrect) {
      setMessage('Congratulations! You solved the Sudoku correctly.');
    } else {
      setMessage('There is a mistake. Try again!');
    }
  };

  const retryGame = () => {
    // Reset the user board and message
    setUserBoard(sudokuBoard.slice());
    setMessage('');
  };

  const renderBoard = () => {
    if (!userBoard) return null;

    return (
      <div className="sudoku-board">
        {userBoard.map((cell, index) => {
          const value = cell === null ? '' : cell + 1;
          return (
            <input
              key={index}
              type="number"
              min="1"
              max="9"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              className="sudoku-cell"
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Sudoku Game</h1>
      {renderBoard()}

      <PrimaryButton onClick={checkSolution} buttonText={"Solve"}/>

      {message && (
        <>
        <p id="message">{message}</p>
         <div className="buttons_how_to_continue">
                <PrimaryButton onClick={() => setMessage('')} buttonText={"Continue"} />
                <PrimaryButton onClick={() => setMessage('')} buttonText={"New game"} />  
            </div>
        </>
          )}
  </div>
    );
};

export default App;
