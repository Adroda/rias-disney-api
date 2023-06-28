import { fetchRandomCharacter } from '../../services/DisneyServices';
import RandomIcon from '../../assets/reload.png';
import './randomButton.scss';

const RandomButton = ({ setCharacter, setShowGame }) => {
  let handleClick = async () => {
    let response = await fetchRandomCharacter();
    setCharacter(response.data);
    setShowGame(null);
  };

  return (
    <button className='randomButton' onClick={handleClick}>
      <img className='randomIcon' src={RandomIcon} alt='random icon' />
    </button>
  );
};

export default RandomButton;
