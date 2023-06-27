import SearchBar from '../searchBar/SearchBar';
import RandomButton from '../randomButton/RandomButton';
import GameButton from '../gameButton/GameButton'
import './header.scss';
import { useSpring, animated } from 'react-spring';

const Header = ({ setCharacter, setShowGame }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });
  return (
    <div className='header'>
      <div className='logo'>
        <section className='logo-wrapper'>
          <div className='logo-top'>DISNEY API</div>
          <div className='logo-bottom'>DISNEY API</div>
        </section>
      </div>
      <div className='titulo'>
        <animated.p style={props}>DISNEY CHARACTERS</animated.p>
      </div>
      <div className='cont'>
        <SearchBar setCharacter={setCharacter} setShowGame={setShowGame} />
        <RandomButton setCharacter={setCharacter} setShowGame={setShowGame}/>
        <GameButton setCharacter={setCharacter} setShowGame={setShowGame}/>
      </div>
    </div>
  );
};

export default Header;
