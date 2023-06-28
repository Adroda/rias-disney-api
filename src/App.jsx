import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/homePage';
import CharacterPage from './pages/character/characterPage';
import GamePage from './pages/game/gamePage';
import './App.scss';
import { useState, createContext } from 'react';

export const CharacterContext = createContext();

const App = () => {
  const [character, setCharacter] = useState(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character' element={<CharacterPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </div>
    </CharacterContext.Provider>
  );
};

export default App;
