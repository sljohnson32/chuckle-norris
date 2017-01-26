import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import Input from '../Input';

class Home extends Component {

  render() {
    const { handleChange, num, getJokes } = this.props;
    return (
      <div>
        <section className="joke-controller">
          {window.location.hash === "#/" ?
            <Button
              name={ 'jokes-btn' }
              btnText={<Link to='/jokes'>Get Jokes</Link>}
              func={ getJokes }
            />
            :
            <Button
              name={ 'jokes-btn' }
              btnText={ 'Get Jokes' }
              func={ getJokes }
            />}
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
        { this.props.children }
      </div>
    );
  }
}

export default Home;
