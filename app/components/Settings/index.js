import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';

class Settings extends Component {

  render() {
    const { newName, updateName, setDisplayName } = this.props;
    return (
      <div>
        <h4>Set Name:</h4>
        <Input
          name={ 'name-input' }
          type={ 'text' }
          handleChange={ updateName }
          val={ newName }
        />
        <Button
          btnText={ 'SET' }
          className={ 'setName-btn' }
          func={ setDisplayName }
        />

      </div>
    );
  }
}

export default Settings;
