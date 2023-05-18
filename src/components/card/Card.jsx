import "../../styles/card/card.scss";

const Card = () => {
  return(
    <div className="contenedor">
      <div className="character">
        <h1 className="characterName">Nombre del personaje</h1>
        <img className="characterImage" src="https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg" alt=""></img>
      </div>
      <div className="characterInfo">
        <div>
          <h2 className="films">Films:</h2>
        </div>
      </div>
    </div>

  );
};
export default Card;