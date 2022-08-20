
import React from 'react'
import "../styles/welcome-screen.css";
const WelcomeScreen = ({ startGame }) => {
  const [difficulty, setDifficulty] = React.useState(1);
  return (
    <div className="wrapper">
      <button className="start-game-button" onClick={startGame}>Start Game</button>
      <select
        value={difficulty}
        label="Age"
        onChange={(e) => {
          console.log(e);
        }}
      >
        <option value={1}>EASY</option>
        <option value={2}>MEDIUM</option>
        <option value={3}>HARD</option>
      </select>
    </div>
  );
};

export default WelcomeScreen