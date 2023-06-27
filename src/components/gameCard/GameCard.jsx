import { useEffect, useRef } from 'react';
import './gameCard.scss';
import { fetchCharacter } from '../../services/DisneyServices';

const GameCard = ({ character }) => {
  const inputRef = useRef(null);

  /// usar use effect para cargar character

  useEffect(() => {}, []);

  let inputValue;
  let handleEnter = async (event) => {
    if (event.key === 'Enter') {
      inputValue = event.target.value;
      let response = await fetchCharacter(inputValue);
    }
  };

  return (
    <div className='contenedor'>
      <div className='character'>
        <h1 className='characterName'>{character.name}</h1>
        <img className='characterImage' src={character.imageUrl} alt=''></img>
      </div>
      <div className='characterInfo'>
        <input
          className='searchbar-input'
          type='text'
          placeholder='Enter character name'
          ref={inputRef}
          onKeyDown={handleEnter}
        />
      </div>
    </div>
  );
};

export default GameCard;
