import Header from './components/header/Header';
import Card from './components/card/Card';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [character,setCharacter] = useState();

  return (
    <div>
      <Header setCharacter={setCharacter}/>
      <Card character={character}/>
    </div>
  );
};

export default App;
