import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  //checkWinner function Logic
  const checkWinner = (state: any[]) => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //checking if there is value in the box.
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const handleGameClick = (index: number) => {
    const stateCopy = Array.from(state);

    if (stateCopy[index] !== null) return; //this part check if the value is equal true the the value cannot be change anymore.

    stateCopy[index] = turn;

    //this part call the chcekWinner function and Check if X or O win the game.
    const win = checkWinner(stateCopy);
    if (win) {
      alert(`${turn} won the game`);
    }

    setTurn(turn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  return (
    <div className="board">
      <div className="row">
        {/* This part i cannot figure out why the onClick function is on error state. */}
        <Game onClick={() => handleGameClick(0)} value={state[0]} />
        <Game onClick={() => handleGameClick(1)} value={state[1]} />
        <Game onClick={() => handleGameClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Game onClick={() => handleGameClick(3)} value={state[3]} />
        <Game onClick={() => handleGameClick(4)} value={state[4]} />
        <Game onClick={() => handleGameClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Game onClick={() => handleGameClick(6)} value={state[6]} />
        <Game onClick={() => handleGameClick(7)} value={state[7]} />
        <Game onClick={() => handleGameClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
