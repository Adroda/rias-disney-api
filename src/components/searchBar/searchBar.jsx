import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../../assets/search-bar.png';
import { fetchCharacter } from '../../services/DisneyServices';
import './searchBar.scss';
import { CharacterContext } from '../../App';

const SearchBar = () => {
  let navigate = useNavigate();
  const inputRef = useRef(null);
  const { setCharacter } = useContext(CharacterContext);
  let inputValue;

  let handleEnter = async (event) => {
    if (event.key === 'Enter') {
      inputValue = event.target.value;
      let response = await fetchCharacter(inputValue);
      setCharacter(response.data);
      navigate('/character');
      event.target.value = '';
    }
  };

  const handleClick = async () => {
    if (inputRef.current.value) {
      let response = await fetchCharacter(inputRef.current.value);
      setCharacter(response.data);
      navigate('/character');
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <div className='searchBarContainer'>
        <input
          className='searchbar-input'
          type='text'
          placeholder='Enter character name'
          value={inputValue}
          ref={inputRef}
          onKeyDown={handleEnter}
        />
      </div>
      <button className='search' onClick={() => handleClick()}>
        <img className='searchIcon' src={SearchIcon} alt='Search icon' />
      </button>
    </>
  );
};

export default SearchBar;
