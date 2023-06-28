import { useRef } from 'react';
import SearchIcon from '../../assets/search-bar.png';
import { fetchCharacter } from '../../services/DisneyServices';
import './searchBar.scss';

const SearchBar = ({ setCharacter, setShowGame }) => {
  const inputRef = useRef(null);
  let inputValue;
  let handleEnter = async (event) => {
    if (event.key === 'Enter') {
      inputValue = event.target.value;
      let response = await fetchCharacter(inputValue);
      setShowGame(false);
      setCharacter(response.data);
      event.target.value = '';
    }
  };

  const handleClick = async () => {
    if (inputRef.current.value) {
      let response = await fetchCharacter(inputRef.current.value);
      setShowGame(false);
      setCharacter(response.data);
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
