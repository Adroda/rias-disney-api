import { useNavigate } from 'react-router-dom';
import { fetchRandomCharacter } from '../../services/DisneyServices';
import RandomIcon from '../../assets/reload.png';
import './randomButton.scss';
import { useContext } from 'react';
import { CharacterContext } from '../../App';

const RandomButton = () => {
  const { setCharacter } = useContext(CharacterContext);
  let navigate = useNavigate();

  let handleClick = async () => {
    let response = await fetchRandomCharacter();
    setCharacter(response.data);
    navigate('/character');
  };

  return (
    <button className='randomButton' onClick={handleClick}>
      <img className='randomIcon' src={RandomIcon} alt='random icon' />
    </button>
  );
};

export default RandomButton;
