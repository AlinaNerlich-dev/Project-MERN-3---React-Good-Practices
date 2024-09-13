import { useReducer, useRef, useEffect } from 'react';
import "./Hangman.css";
import PrimaryButton from "../components/Universal/Primary-button.jsx";
import { wordList } from "../utilities/wordList.js";
import { getRandomWord } from '../utilities/functions.js';

const initialState = {
  word: getRandomWord(wordList),
  guesses: [],
  wrongGuesses: [],
  alertShown: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {
        word: getRandomWord(wordList),
        guesses: [],
        wrongGuesses: [],
        alertShown: false
      };
    case 'ADD_GUESS':
      if (state.word.includes(action.payload)) {
        return {
          ...state,
          guesses: [...state.guesses, action.payload]
        };
      } else {
        return {
          ...state,
          wrongGuesses: [...state.wrongGuesses, action.payload]
        };
      }
    case 'SHOW_ALERT':
      return {
        ...state,
        alertShown: true
      };
    default:
      return state;
  }
};

const Hangman = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  const handleGuess = (event) => {
    event.preventDefault();
    const guess = inputRef.current.value;
    inputRef.current.value = '';

    if (guess && !state.guesses.includes(guess) && !state.wrongGuesses.includes(guess)) {
      dispatch({ type: 'ADD_GUESS', payload: guess });
    }
  };

  const renderWord = () => {
    return state.word.split('').map((letter, index) => (
      <span key={index} className={`letter ${state.guesses.includes(letter) ? 'guessed' : 'not-guessed'}`}>
        {state.guesses.includes(letter) ? letter : ' _ '}
      </span>
    ));
  };

  const isGameOver = state.wrongGuesses.length >= 10;
  const isGameWon = state.word.split('').every((letter) => state.guesses.includes(letter));

  const resetGame = () => {
    dispatch({ type: 'NEW_GAME' });
    inputRef.current.value = '';
  };

  useEffect(() => {
    if ((isGameOver || isGameWon) && !state.alertShown) {
      setTimeout(() => {
        if (isGameOver) {
          alert(`Game over! The word was "${state.word}".`);
        } else if (isGameWon) {
          alert('Congratulations! You guessed the word!');
        }
        dispatch({ type: 'SHOW_ALERT' });
      }, 100);
    }
  }, [isGameOver, isGameWon, state.alertShown, state.word]);

  return (
    <div className="hangman">
        <h1>Hangman</h1>
        <div className="word">{renderWord()}</div>
        <div className="wrong-guesses">
          Wrong guesses: <span className="wrong-guesses-letter">{state.wrongGuesses.join(', ')}</span>
        </div>
        <form onSubmit={handleGuess}>
          <input type="text" ref={inputRef} maxLength="1" disabled={isGameOver || isGameWon} placeholder="Type your guess here" />
          <PrimaryButton buttonText={"Guess"} type="submit" disabled={isGameOver || isGameWon} />
        </form>
        <div className="reset-button">
          <PrimaryButton  onClick={resetGame} buttonText={"Reset Game"} type="button" />
        </div>
    </div>
  );
};

export default Hangman;