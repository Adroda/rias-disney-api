import SearchBar from './SearchBar';
import RandomButton from './RandomButton';
import '../../styles/header/header.scss';
import {
  fetchCharacter,
  fetchRandomCharacter,
} from '../../services/DisneyServices';

const Header = ({ setCharacter }) => {
  return (
    <div className="header">
      <div className="logo">
        <section className="logo-wrapper">
          <div className="logo-top">RITA TEAM</div>
          <div className="logo-bottom">RITA TEAM</div>
        </section>
      </div>
      <div className="titulo">
        <p className="title">DISNEY CHARACTERS </p>
      </div>
      <div className="cont">
        <SearchBar  setCharacter={setCharacter}/>
        <RandomButton setCharacter={setCharacter}/>
      </div>
    </div>
  );
};

export default Header;
