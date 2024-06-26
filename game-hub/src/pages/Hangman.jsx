import { useState, useRef, useEffect } from 'react';
import "./Hangman.css";
import PrimaryButton from "../components/Universal/Primary-button.jsx"
import { wordList } from "../utilities/wordList.js";
import { getRandomWord } from '../utilities/functions.js';




const Hangman = () => {
  const [word, setWord] = useState(getRandomWord(wordList));
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const inputRef = useRef(null);

  const handleGuess = (event) => {
    event.preventDefault();
    const guess = inputRef.current.value.toUpperCase();
    inputRef.current.value = '';

    if (guess && !guesses.includes(guess) && !wrongGuesses.includes(guess)) {
      if (word.includes(guess)) {
        setGuesses([...guesses, guess]);
      } else {
        setWrongGuesses([...wrongGuesses, guess]);
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
    setWord(getRandomWord());
    setGuesses([]);
    setWrongGuesses([]);
    inputRef.current.value = '';
  };

  useEffect(() => {
    if (isGameOver) {
      alert(`Game over! The word was "${word}".`);
    } else if (isGameWon) {
      alert('Congratulations! You guessed the word!');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver, isGameWon]);

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
