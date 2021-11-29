import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  const HandleClick = (value) => {
    setUserChoice(value);
    ComputerChoice();
  };

  const ComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
setComputerChoice(randomChoice);
    
  };
  useEffect(() => {
    
    CheckResult();
  }, [ComputerChoice]);
  const CheckResult = () => {
    
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "paperrock":
      case "rockscissors":
        setResult("YOU WIN");
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("YOU LOSE");
        break;
      case "paperpaper":
      case "scissorsscissors":
      case "rockrock":
        setResult("IT'S A DRAW");
        break;
    }
  };
  return (
    <div className='container'>
      <h1>Your choice is:{userChoice} </h1>
      <div className="choices-places">
      {choices.map((choices, index) => (
        <button
          key={index}
          onClick={() => {
            HandleClick(choices);
          }}
          className={`place${index}`}
        >
          {choices}
        </button>
      ))}
      </div>
      <h1>Computer choice is: {computerChoice}</h1>
      <h1><span>///</span>{result}<span>///</span></h1>
    </div>
  );
}

export default App;
