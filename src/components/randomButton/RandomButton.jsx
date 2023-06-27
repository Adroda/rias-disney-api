import { fetchRandomCharacter } from '../../services/DisneyServices';
import './randomButton.scss';

const RandomButton = ({ setCharacter, setShowGame }) => {
  let handleClick = async () => {
    let response = await fetchRandomCharacter();
    setCharacter(response.data);
    setShowGame(null)
  };

  return (
    <button className='randomButton' onClick={handleClick}>
      Random
    </button>
  );
};

export default RandomButton;
