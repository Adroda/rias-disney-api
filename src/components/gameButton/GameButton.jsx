import { fetchRandomCharacter } from '../../services/DisneyServices';
import './gameButton.scss';

const GameButton = ({ setCharacter, setShowGame }) => {
    let handleClick = async () => {
      let response = await fetchRandomCharacter();
      setCharacter(response.data);
      setShowGame(true);
    };
  
    return (
      <button className='gameButton' onClick={handleClick}>
        Play
      </button>
    );
  };

  export default GameButton