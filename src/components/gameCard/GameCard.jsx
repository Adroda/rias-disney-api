import { useEffect, useRef, useState } from 'react';
import { fetchRandomCharacter } from '../../services/DisneyServices';
import './gameCard.scss';

const GameCard = () => {
  const status = {
    inicio: 'iniciando',
    correcto: 'Correcto!',
    incorrecto: 'Vuelve a intentarlo',
  };
  const inputRef = useRef(null);
  const [blurIntensity, setBlurIntensity] = useState(5);
  const [mensaje, setMensaje] = useState(status.inicio);
  const [character, setCharacter] = useState(null);
  const [hideCharacterName, setHideCharacterName] = useState(true);

  useEffect(() => {
    console.log('yes');
    setHideCharacterName(true);
    setMensaje(status.inicio);
    getCharacter();
  }, []);

  const getCharacter = async () => {
    let response = await fetchRandomCharacter();
    setCharacter(response.data);
    setBlurIntensity(5);
    setHideCharacterName(true);
    setMensaje(status.inicio);
    console.log(response.data.name);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  let handleEnter = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      let inputValue = inputRef.current.value.toUpperCase();
      let name = character.name.toUpperCase();
      if (name === inputValue) {
        setHideCharacterName(false);
        setMensaje(status.correcto);
        setBlurIntensity(0);
      } else {
        setMensaje(status.incorrecto);
        blurIntensity > 0
          ? setBlurIntensity(blurIntensity - 1)
          : setBlurIntensity(blurIntensity);
      }
      inputRef.current.value = '';
    }
  };

  return (
    <div className='game-contenedor'>
      {character ? (
        <>
          <div className='character'>
            {hideCharacterName ? null : (
              <h1 className='characterName'>{character.name}</h1>
            )}
            <img
              className='characterImageGame'
              src={character.imageUrl}
              alt='character'
              style={{ filter: `blur(${blurIntensity}px)` }}
            ></img>
          </div>
          <input
            className='gameText'
            type='text'
            placeholder='Guess the character'
            ref={inputRef}
            onKeyDown={handleEnter}
          />
          {mensaje !== status.inicio ? (
            <div className='msj'>
              {mensaje === status.correcto ? (
                <>
                  <p className='acierto'>{status.correcto}</p>
                  <button className='gameButton' onClick={() => getCharacter()}>
                    Jugar de nuevo!
                  </button>
                </>
              ) : (
                <>
                  <p className='error'>{status.incorrecto}</p>
                  <button className='gameButton' onClick={handleEnter}>
                    Ingresar
                  </button>
                  <button className='gameButton' onClick={() => getCharacter()}>
                    Siguiente
                  </button>
                </>
              )}
            </div>
          ) : (
            <>
              <button className='gameButton' onClick={handleEnter}>
                Ingresar
              </button>
              <button className='gameButton' onClick={() => getCharacter()}>
                Siguiente
              </button>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default GameCard;
