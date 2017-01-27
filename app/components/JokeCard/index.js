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

JokeCard.propTypes = {
  joke: React.PropTypes.object,
  setFav: React.PropTypes.func
}

export default JokeCard;
