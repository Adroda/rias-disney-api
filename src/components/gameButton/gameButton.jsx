import './gameButton.scss';
import PlayIcon from '../../assets/play.png';
import { Link } from 'react-router-dom';

const gameButton = () => {
  return (
    <Link className='gameButton' to='/game'>
      <img className='playIcon' src={PlayIcon} alt='Search icon' />
    </Link>
  );
};

export default gameButton;
