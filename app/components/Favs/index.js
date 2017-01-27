import React, { Component } from 'react';
import Home from '../Home';
import JokeCard from '../JokeCard';
import './favs-style.scss'

class Favs extends Component {

  render() {
    const { favJokes, setFav, handleChange, getJokes } = this.props;
    const favJokeCards = favJokes.length > 0 ? favJokes.map((joke, i) => <JokeCard key={ i } joke={ joke } fav={ joke.fav } setFav={ setFav } />) : <h2>You do not have any favorite jokes selected...</h2>;
    return (
      <div>
        <Home handleChange={ handleChange } getJokes={ getJokes } />
        <section className='jokes-container'>
          {favJokeCards}
        </section>
      </div>
    );
  }
}

Favs.propTypes = {
  favJokes: React.PropTypes.array,
  setFav: React.PropTypes.func,
  handleChange: React.PropTypes.func,
  getJokes: React.PropTypes.func
}

export default Favs;
