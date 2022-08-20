import { useState } from 'react';
import './App.css';
import GameScreen from "./screens/game-screen";
import WelcomeScreen from './screens/welcome-screen';
function App() {
  const [pageNo , setPageNo] = useState(0);
  return (
    <div className="App">
      {pageNo === 0 && <WelcomeScreen startGame={() => setPageNo(1)} />}
      {pageNo === 1 && <GameScreen />}
    </div>
  );
}

export default App;
