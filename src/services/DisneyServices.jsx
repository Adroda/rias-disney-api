export const BASE_URL = 'https://api.disneyapi.dev/character';
export const API_KEY = process.env.REACT_APP_APIKEY;

const fetchCharacter = (id) => {
  const URL = `${BASE_URL}/${id}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((character) => character);
};

export { fetchCharacter };
