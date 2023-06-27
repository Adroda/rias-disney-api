import { useEffect, useRef, useState } from 'react';
import './gameCard.scss';
import { fetchCharacter } from '../../services/DisneyServices';

const GameCard = ({ character }) => {

  const [blurIntensity, setBlurIntensity] = useState(5);
  const [mensaje, setMensaje] = useState ("");
  const [status, setStatus]  = useState (false);
  let aux;
  const inputRef = useRef(null);
  let hideCharacterName = true;
  console.log("Aca el character" + character.name);
  /// usar use effect para cargar character

  useEffect(() => {
    const msj = setTimeout(() => {    
      setMensaje(null);
    }, 5000);
  }, [mensaje]);

  
  

  let inputValue;
  let handleEnter = async (event) => {
    if (event.key === 'Enter') {
     inputValue = event.target.value.toUpperCase();
     console.log(event.target.value);
     let name = character.name.toUpperCase()
    //let response = await fetchCharacter(inputValue);
    if(name === inputValue){
      hideCharacterName = false; 
      setMensaje("CORRECTO!")
      setBlurIntensity(0)
      setStatus(true)
    /*  const aa = setTimeout(() => {    
        setBlurIntensity(5)  
      }, 3000);
        */
    }else{
      aux = blurIntensity;
      aux --;
      setMensaje("Vuelve a intentarlo")
      if(aux > 0){
        setBlurIntensity(aux)
      } else{
        setBlurIntensity(0);
      }   
    }
    event.target.value = '';   
    }
  };

  return (
    <div className='contenedor'>
      <div className='character'>
        {hideCharacterName ? null : <h1 className='characterName'>{character.name}</h1>}
        <img 
        className='characterImageGame' 
        src={character.imageUrl} 
        alt=''
        style={{ filter: `blur(${blurIntensity}px)` }}></img>
      </div>
      <div className='characterInfoGame'>
        <input
          className='gameText'
          type='text'
          placeholder='Guess the character'
          ref={inputRef}
          onKeyDown={handleEnter}
        />
      </div>
      <div className='msj'>
        {mensaje && <p className={`mensaje ${mensaje.length > 10 ? 'error' : 'acierto'}`}>{mensaje}</p>}
      </div>
    </div>
  );
};

export default GameCard;
