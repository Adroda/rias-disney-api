import SearchBar from '../searchBar/searchBar';
import RandomButton from '../randomButton/randomButton';
import GameButton from '../gameButton/gameButton';
import MickeyIcon from '../../assets/mickey.png';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <section className='logo-wrapper'>
          <div className='logo-top'>DISNEY APP</div>
          <div className='logo-bottom'>DISNEY APP</div>
        </section>
      </div>
      <Link className='inicioButton' to='/'>
        <img className='playIcon' src={MickeyIcon} alt='play icon' />
      </Link>
      <div className='cont'>
        <SearchBar />
        <RandomButton />
        <GameButton />
      </div>
    </div>
  );
};

export default Header;
