import React from 'react';

const JokeCard = (props) => {
  const { joke } = props;
  return (
    <div>
      {joke.joke}
    </div>
  );
}

export default JokeCard;
