import SearchBar from './SearchBar';
import RandomButton from './RandomButton';
import '../../styles/header/header.scss';

const Header = ({ card, setCard }) => {

  return (
    <div className="header">
      <div className="logo">
      <section className="logo-wrapper">
        <div className="logo-top">RITA TEAM</div>
        <div className="logo-bottom">RITA TEAM</div>
      </section>
      </div>
      <div className="titulo">
      <p>DISNEY CHARACTERS </p> 
      </div>
      <div className="cont">
      <SearchBar />
      <RandomButton />
      </div>
    </div>
  );
};

export default Header;
