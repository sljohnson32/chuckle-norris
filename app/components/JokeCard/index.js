import React from 'react';
import Button from '../Button';
import './jokecard-style';

const JokeCard = (props) => {
  const { joke, setFav, fav } = props;
  return (
    <div className='joke-card'>
      {joke.joke}
      <Button
        name={`fav-btn ${fav ? 'favorite' : ''}`}
        func={ () => setFav(joke.id) }
        btnText={'★'} />
    </div>
  );
}

JokeCard.propTypes = {
  joke: React.PropTypes.object,
  setFav: React.PropTypes.func,
  fave: React.PropTypes.bool
}

export default JokeCard;
