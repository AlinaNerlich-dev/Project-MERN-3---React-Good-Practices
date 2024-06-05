import { useRef, useState } from "react";
import PrimaryButton from "../components/Primary-button";
import Word from "../components/Hangman/Word";
import Input from "../components/Hangman/Input";
import { wordList } from "../utilities.jsx/wordList";
import { randomInteger } from "../utilities.jsx/functions";
import "./Hangman.css"


const Hangman = () => {
  const [word, setWord] = useState(" ");
  const inputRef = useRef(null);


  const startGame = () => {
    const number = randomInteger(wordList);
    setWord(wordList[number]);
  };

  const letterArary = word
    .split("")
    .map((letter, index) => <span key={index} className="underline"><span className="letter">{letter}</span></span>);
 
  const onChange=()=>{
    const letter= inputRef.current.value;
    console.log(letter)
  }

  return (
    <div>
      <PrimaryButton buttonText="Start the Game" onClick={startGame} />
      <Word word={letterArary} />
      <Input id="input" type="text" ref={inputRef} placeholder="Enter a letter" onChange={onChange} />

    </div>
  );
};

export default Hangman;
