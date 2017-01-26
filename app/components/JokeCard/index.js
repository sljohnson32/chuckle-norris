import React from 'react';
import Button from '../Button';

const JokeCard = (props) => {
  const { joke, setFav } = props;
  return (
    <div>
      {joke.joke}
      <Button className={ 'fav-btn' } func={ () => setFav(joke) } btnText={'☆'} />
    </div>
  );
}

export default JokeCard;
