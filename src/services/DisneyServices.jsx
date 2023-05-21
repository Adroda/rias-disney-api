export const BASE_URL = 'https://api.disneyapi.dev/character';
export const API_KEY = process.env.REACT_APP_APIKEY;
const totalCharacters = 7438;

let fetchCharacter = async (name) => {
  const URL = `${BASE_URL}?name=${name}`;
  const response = await fetch(URL);
  let data = await response.json();
  return data;
};

let fetchRandomCharacter = async () => {
  let count = 0;
  let data;
  while (count === 0) {
    let id = Math.floor(Math.random() * totalCharacters);
    const URL = `${BASE_URL}/${id}`;
    const response = await fetch(`${BASE_URL}/${id}`);
    data = await response.json();
    console.log(data );
    count = data.info.count;
  }
  return data;
};

export { fetchCharacter, fetchRandomCharacter };
