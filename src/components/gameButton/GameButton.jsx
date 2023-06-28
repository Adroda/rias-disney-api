import './gameButton.scss';
import PlayIcon from '../../assets/play.png';

const GameButton = ({ setShowGame }) => {
  let handleClick = async () => {
    setShowGame(true);
  };

  return (
    <button className='gameButton' onClick={handleClick}>
      <img className='playIcon' src={PlayIcon} alt='Search icon' />
    </button>
  );
};

export default GameButton;
