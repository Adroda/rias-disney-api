import SearchBar from '../searchBar/SearchBar';
import RandomButton from '../randomButton/RandomButton';
import GameButton from '../gameButton/GameButton';
import MickeyIcon from '../../assets/mickey.png';
import './header.scss';

const Header = ({ setCharacter, setShowGame }) => {
  return (
    <div className='header'>
      <div className='logo'>
        <section className='logo-wrapper'>
          <div className='logo-top'>DISNEY APP</div>
          <div className='logo-bottom'>DISNEY APP</div>
        </section>
      </div>
      <button
        className='inicioButton'
        onClick={() => {
          setCharacter(null);
          setShowGame(false);
        }}
      >
        <img className='playIcon' src={MickeyIcon} alt='play icon' />
      </button>
      <div className='cont'>
        <SearchBar setCharacter={setCharacter} setShowGame={setShowGame} />
        <RandomButton setCharacter={setCharacter} setShowGame={setShowGame} />
        <GameButton setCharacter={setCharacter} setShowGame={setShowGame} />
      </div>
    </div>
  );
};

export default Header;
