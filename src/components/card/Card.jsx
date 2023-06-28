import './card.scss';
import { useSpring, animated } from 'react-spring';

const Card = ({ character }) => {
  console.log(character);
  const props = useSpring({
    // from: { /*opacity: 0, */ transform: 'translateX(60px)' },
    // to: { /*opacity: 0.6,*/ transform: 'translateX(10px)' },
    // config: { duration: 1000 },
  });

  if (!character) {
    return (
      <div className='contenedor'>
        <div className='character'>
          <h1 className='characterName'>BIENVENIDO</h1>
        </div>
      </div>
    );
  } else if (character.length > 1) {
    return (
      <div className='contenedor'>
        <div className='character'>
          <h1 className='characterName'>Ingrese un nombre...</h1>
        </div>
      </div>
    );
  } else {
    return (
      <animated.div style={props} className='contenedor'>
        <div className='character'>
          <h1 className='characterName'>{character.name}</h1>
          <img className='characterImage' src={character.imageUrl} alt=''></img>
        </div>
        <div className='characterInfo'>
          {character.films && character.films.length > 0 ? (
            <div className='films'>
              <h2 className='films'>Peliculas:</h2>
              <ul>
                {character.films.map((film, index) => (
                  <li className='filmtitle' key={index}>
                    {film}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2>No tiene Peliculas</h2>
            </div>
          )}
          {character.tvShows && character.tvShows.length > 0 ? (
            <div className='films'>
              <h2 className='films'>Series:</h2>
              <ul>
                {character.tvShows.map((tvShow, index) => (
                  <li className='filmtitle' key={index}>
                    {tvShow}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2>No tiene series</h2>
            </div>
          )}
        </div>
      </animated.div>
    );
  }
};

export default Card;
