import { fetchRandomCharacter } from '../../services/DisneyServices';
import './randomButton.scss';

const RandomButton = ({ setCharacter }) => {
  let handleClick = async () => {
    let response = await fetchRandomCharacter();
    setCharacter(response.data);
  };

  return (
    <button className='randomButton' onClick={handleClick}>
      Random
    </button>
  );
};

export default RandomButton;
