export const BASE_URL = 'https://api.disneyapi.dev/character';
export const API_KEY = process.env.REACT_APP_APIKEY;
const totalCharacters = 7438;

const fetchCharacter = async (name) => {
  const URL = `${BASE_URL}?name=${name}`;
  const response = await fetch(URL);
  let data = await response.json();
  if (data.info.count > 1) {
    console.log(data.data);
    data.data.forEach((char) => {
      if (char.name.toUpperCase() === name.toUpperCase()) {
        data.data = char;
        return data;
      }
    });
  }
  return data;
};

const fetchRandomCharacter = async () => {
  let count = 0;
  let data;
  //let totalCharacters = charactersLength
  while (count === 0) {
    let id = Math.floor(Math.random() * totalCharacters);
    const response = await fetch(`${BASE_URL}/${id}`);
    data = await response.json();
    count = data.info.count;
  }
  return data;
};

export { fetchCharacter, fetchRandomCharacter };
