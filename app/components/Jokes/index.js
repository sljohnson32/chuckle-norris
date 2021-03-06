import React, { Component } from 'react';
import Home from '../Home';
import JokeCard from '../JokeCard';
import './jokes-style';

class Jokes extends Component {

  render() {
    const { handleChange, getJokes, jokes, setFav, num } = this.props;
    const jokeCards = jokes.length > 0 ? jokes.map((joke, i) => <JokeCard key={ i } joke={ joke } fav={ joke.fav } setFav={ setFav } />) : null;
    return (
      <div>
        <Home num={ num } handleChange={ handleChange } getJokes={ getJokes } />
        <section className='jokes-container'>
          {jokeCards}
        </section>
      </div>
    );
  }
}

Jokes.propTypes = {
  handleChange: React.PropTypes.func,
  getJokes: React.PropTypes.func,
  jokes: React.PropTypes.array,
  setFav: React.PropTypes.func
}

export default Jokes;
