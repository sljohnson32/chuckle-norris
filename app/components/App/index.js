import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../Header'
import RandomJoke from '../RandomJoke'
import '../../styles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomJoke: '',
      jokes: '',
      newName: '',
      displayName: '',
      num: '',
      favJokes: []
    };
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/1?escape=javascript').then((response) => {
      return response.json();
      debugger
    }).then((data) => {
      this.setState({ randomJoke: data.value[0].joke })
    })
  }

  getJokes() {
    const num = this.state.num;
    fetch(`http://api.icndb.com/jokes/random/${num}?escape=javascript`).then((response) => {
      return response.json();
      debugger
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
  }

  clearDisplayName() {
    this.setState({ displayName: '' })
  }

  setFav(favJoke) {
    const favs = this.state.favJokes;
    const exists = favs.find((joke) => {
      return joke.id === favJoke.id;
    });
    exists !== undefined ? this.removeFav(favJoke) : this.addFav(favJoke);
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
        <div className='app-stuff'>
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
          favJokes: this.state.favJokes
        })}
        </div>
      </div>
    );
  }
}

export default App;
