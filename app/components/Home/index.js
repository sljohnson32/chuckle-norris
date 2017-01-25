import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import Input from '../Input';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      num: ''
    }
  }

  handleChange(newVal) {
    this.setState({ num: newVal });
  }

  render() {
    const { handleChange, num } = this.props;
    return (
      <div>
        <section className="joke-controller">
          <Button
            name={ 'jokes-btn' }
            btnText={<Link to='/jokes'>Get Jokes</Link>}
          />
          <Input
            name={ 'num-input' }
            type={ 'number' }
            handleChange={ this.handleChange.bind(this) }
            val={ this.state.num }
          />
          <Button
            name={ 'favs-btn' }
            btnText={ <Link to='/favorites'>Favorites</Link> }
          />
        </section>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
