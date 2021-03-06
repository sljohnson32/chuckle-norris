import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../Header'
import RandomJoke from '../RandomJoke'
import firstName from './Logic/firstName'
import lastName from './Logic/lastName'
import PlaySound from '../PlaySound'
import '../../styles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: "",
      jokes: [],
      newName: "",
      displayName: 'Chuck Norris',
      num: '0',
      favJokes: [],
      parentalControls: false
    };
  }

  componentDidMount() {
    fetch('https://api.icndb.com/jokes/random/1?escape=javascript').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ randomJoke: data.value[0].joke })
    })
  }

  getJokes() {
    const num = this.state.num;
    const first = firstName(this.state.displayName);
    const last = lastName(this.state.displayName);
    const controls = this.state.parentalControls ? '&exclude=[explicit]' : '';
    const name = this.state.displayName ? `&firstName=${first}&lastName=${last}` : '';

    fetch(`https://api.icndb.com/jokes/random/${num}?escape=javascript${controls}${name}`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ jokes: data.value })
    })
  }

  handleNumChange(newVal) {
    this.setState({ num: newVal });
  }

  updateName(newName) {
    this.setState({ newName });
  }

  setDisplayName() {
    this.setState({ displayName: this.state.newName });
    // PlaySound('one');
  }

  clearDisplayName() {
    this.setState({ displayName: "Chuck Norris", newName: "" })
  }

  updateControls() {
    this.setState({ parentalControls: !this.state.parentalControls })
  }

  setFav(id) {
    let updatedJokes = this.state.jokes.map(joke => {
      if(joke.id === id) {
        joke.fav = !joke.fav
        joke.fav ? this.addFav(joke) : this.removeFav(joke)
      }
      return joke
    })
    this.setState({ jokes: updatedJokes })
  }

  addFav(favJoke) {
    this.state.favJokes.push(favJoke);
    this.setState({ favJokes: this.state.favJokes });
  }

  removeFav(favJoke) {
    const newArray = this.state.favJokes.filter((joke) => {
      return joke.id !== favJoke.id;
    })
    this.setState({ favJokes: newArray });
  }

  render() {
    return (
      <div>
        <Header />
        <RandomJoke randomJoke={this.state.randomJoke} />
        {React.cloneElement(this.props.children, {
          newName: this.state.newName,
          displayName: this.state.displayName,
          updateName: this.updateName.bind(this),
          setDisplayName: this.setDisplayName.bind(this),
          clearDisplayName: this.clearDisplayName.bind(this),
          handleChange: this.handleNumChange.bind(this),
          num: this.state.num,
          getJokes: this.getJokes.bind(this),
          jokes: this.state.jokes,
          setFav: this.setFav.bind(this),
          favJokes: this.state.favJokes,
          parentalControls: this.state.parentalControls,
          updateControls: this.updateControls.bind(this)
        })}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App;
