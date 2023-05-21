import "../../styles/card/card.scss";

const Card = ({ character }) => {
  if(!character){
    return(<p>BIENVENIDO</p>);
  }
  return(
    <div className="contenedor">
      <div className="character">
        <h1 className="characterName">{character.name}</h1>
        <img className="characterImage" src={character.imageUrl} alt=""></img>
      </div>
      <div className="characterInfo">
        {character.films && character.film===undefined ?(
          <div className="films">
            <h2 className="films">Films:</h2>
            <ul>
              {character.films.map((film,index)=>(
                <li className="filmtitle" key={index}>{film}</li>
              ))
              }
            </ul>
          </div>
        ) : (
        <div>
          <h2>No tiene films</h2>
          <p>HOLA</p>
        </div>
      )}  
    </div>
  </div>
  );
};
export default Card;