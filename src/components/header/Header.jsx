import SearchBar from './SearchBar';
import RandomButton from './RandomButton';
import '../../styles/header/header.css';

const Header = ({ card, setCard }) => {
  return (
    <div className="header">
      <section className="logo-wrapper">
        <div className="logo-top">RITA TEAM</div>
        <div className="logo-bottom">RITA TEAM</div>
      </section>
      <SearchBar />
      <RandomButton />
    </div>
  );
};

export default Header;
