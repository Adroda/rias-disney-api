import datajson from './data.json';

export const BASE_URL = 'https://api.disneyapi.dev/character';
export const API_KEY = process.env.REACT_APP_APIKEY;
const totalCharacters = 7438;

const fetchCharacter = async (name) => {
  const URL = `${BASE_URL}?name=${name}`;
  let data;
  try {
    const response = await fetch(URL);
    data = await response.json();
  } catch {
    data = datajson;
  }
  if (data.info.count > 1) {
    let characterFound = data.data.find(
      (char) => char.name.toUpperCase() === name.toUpperCase()
    );
    data.data = characterFound;
    return data;
  }
  return data;
};

const fetchRandomCharacter = async () => {
  let count = 0;
  let data;
  while (count === 0) {
    let id = Math.floor(Math.random() * totalCharacters);
    const response = await fetch(`${BASE_URL}/${id}`);
    data = await response.json();
    count = data.info.count;
  }
  return data;
};

export { fetchCharacter, fetchRandomCharacter };
