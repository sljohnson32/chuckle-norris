import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import Input from '../Input';

class Home extends Component {

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
            handleChange={ handleChange }
            val={ num }
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
