import SearchBar from './SearchBar';
import RandomButton from './RandomButton';

const Header = ({ card, setCard }) => {
  return (
    <>
      <div className="logo">RITA TEAM</div>
      <SearchBar />
      <RandomButton />
    </>
  );
};
