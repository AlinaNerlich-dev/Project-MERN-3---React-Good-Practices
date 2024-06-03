import { useEffect, useState } from "react"
import PrimaryButton from "../components/Primary-button"

const wordList=[
  "grandfather",
  "rhythm",
  "knee",
  "honey",
  "nose",
  "middle",
  "step",
  "range",
  "flame",
  "hobbies",
  "exchange",
  "pocket"
  ];


const Hangman = () => {

  const [word, setWord] = useState(" ");
  const [amountDash, setAmountDash] = useState();
  
  
  const randomInteger = () => {
    return (
      Math.floor(Math.random() * (11 - 0 + 1)) + 0
    )
  }

  const startGame = () => {
    const number = randomInteger();
    setWord(wordList[number]);
  }

  let arrayOfDashes = [];
  useEffect(()=>{
    
    setAmountDash(word.length);

    for (let i = 0; i< amountDash; i++){
      arrayOfDashes.push("<span>_</span>>");
    }console.log(arrayOfDashes)
  }, [word, amountDash])
  
  
  return (
    <div>
      <PrimaryButton buttonText="Start the Game" onClick={startGame}/>
     { console.log(word)}
      { arrayOfDashes.map((dash) => {
        return(dash)
      })}
    </div>
  )
}

export default Hangman