import SearchIcon from '../../assets/search-bar.svg';
import { fetchCharacter } from '../../services/DisneyServices';
import '../../styles/header/searchBar.scss';


const SearchBar = ({ setCharacter }) => {
  let inputValue;
  let handleEnter = async (event)=>{
    if(event.key==='Enter'){
    inputValue = event.target.value;
    let response = await fetchCharacter(inputValue);  
    console.log(response.data);
    setCharacter(response.data);    
    }
  }
  

  return (
    <div className="searchBarContainer">
      {/* <img className="searchIcon" src={SearchIcon} alt="Search icon" /> */}
      <input
        className="searchbar-input"
        type="text"
        placeholder="Enter character name"
        value={inputValue}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default SearchBar;
