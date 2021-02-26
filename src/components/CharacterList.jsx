
import { useEffect } from 'react';

function CharacterList() {

  useEffect(() => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
    .then(response => response.json())
    .then(data => console.log(data));
  }, []);

  return (
    <div>LISTA</div>
  )
}

export default CharacterList;