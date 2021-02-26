
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
    .then(response => response.json())
    .then(data => setCharacters(data));
  }, []);

  return (
    <div>{characters.map(character => {
      return (
      <li key={uuidv4()}>
        <h3>{character.character}</h3>
        <img src={character.image} alt={character.character}/>
        <p>{character.quote}</p>
      </li>)
    })}</div>
  )
}

export default CharacterList;