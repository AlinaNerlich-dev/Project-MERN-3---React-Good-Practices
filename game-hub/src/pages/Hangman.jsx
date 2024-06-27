import { useState, useRef, useEffect } from 'react';
import "./Hangman.css";
import PrimaryButton from "../components/Universal/Primary-button.jsx"
import { wordList } from "../utilities/wordList.js";
import { getRandomWord } from '../utilities/functions.js';


const Hangman = () => {
  const [word, setWord] = useState(getRandomWord(wordList));
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [alertShown, setAlertShown] = useState(false);
  const inputRef = useRef(null);

  const handleGuess = (event) => {
    event.preventDefault();
    const guess = inputRef.current.value;
    inputRef.current.value = '';

    if (guess && !guesses.includes(guess) && !wrongGuesses.includes(guess)) {
      if (word.includes(guess)) {
        setGuesses((prevGuesses) => [...prevGuesses, guess]);
      } else {
        console.log('wrong ')
        setWrongGuesses((prevWrongGuesses) => [...prevWrongGuesses, guess]);
      }
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className={`letter ${guesses.includes(letter) ? 'guessed' : 'not-guessed'}`}>
        {guesses.includes(letter) ? letter : ' X '}
      </span>
    ));
  };

  const isGameOver = wrongGuesses.length >= 10;
  const isGameWon = word.split('').every((letter) => guesses.includes(letter));

  const resetGame = () => {
    setWord(getRandomWord(wordList));
    setGuesses([]);
    setWrongGuesses([]);
    setAlertShown(false); 
    inputRef.current.value = '';
  };

  useEffect(() => {
    if ((isGameOver || isGameWon)) {
      setTimeout(() => {
        if (isGameOver) {
          alert(`Game over! The word was "${word}".`);
        } else if (isGameWon) {
          alert('Congratulations! You guessed the word!');
        }
        setAlertShown(true); 
      }, 100);
    }
  }, [isGameOver, isGameWon, alertShown, word]);

  return (
    <div className="hangman">
      <h1>Hangman</h1>
      <div className="word">{renderWord()}</div>
      <div className="wrong-guesses">
        Wrong guesses: {wrongGuesses.join(', ').toUpperCase()}
      </div>
      <form onSubmit={handleGuess}>
        <input type="text" ref={inputRef} maxLength="1" disabled={isGameOver || isGameWon} placeholder="Type your guess here"/>
        <PrimaryButton buttonText={"Guess"} type="submit" disabled={isGameOver || isGameWon} />
      </form>
      <PrimaryButton onClick={resetGame} buttonText={"Reset Game"} type="submit" disabled={isGameOver || isGameWon} />
    </div>
  );
};

export default Hangman;
