import React from 'react'
import "../styles/welcome-screen.css";
import BrainImage from "../assets/brain.svg";
const WelcomeScreen = ({ startGame }) => {
  return (
    <div className="wrapper">
      <h2 className="heading gradient-color">Let's Play</h2>
      <h5 className="sub-heading">Twist your brain</h5>
      <div className="wrapper-inner">
        <img src={BrainImage} className="brain-image" alt="" />
        <button className="start-game-button" onClick={startGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen