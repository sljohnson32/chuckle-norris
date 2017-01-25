import React from 'react';

const RandomJoke = (props) => {
  const {randomJoke} = props;
  return (
    <div>
      {randomJoke}
    </div>
  );
}

export default RandomJoke;
