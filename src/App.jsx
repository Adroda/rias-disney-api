import Header from './components/header/Header';
import Card from './components/card/Card';
import GameCard from './components/gameCard/GameCard';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [character, setCharacter] = useState();
  const [showGame, setShowGame] = useState();

  return (
    <div>
      <Header setCharacter={setCharacter} setShowGame={setShowGame} />
      {showGame ? <GameCard character={character} /> : <Card character={character} />}
    </div>
  );
};

export default App;
