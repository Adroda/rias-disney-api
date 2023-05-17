import SearchIcon from '../../assets/search-bar.svg';
import '../../styles/header/searchBar.css';

const SearchBar = ({ card, setCard }) => {
  return (
    <div className="searchBarContainer">
      <img className="searchIcon" src={SearchIcon} alt="Search icon" />
      <input
        className="searchbar-input"
        type="text"
        placeholder="Enter character name"
      />
    </div>
  );
};

export default SearchBar;
