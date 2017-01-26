import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';

class Settings extends Component {

  render() {
    const { newName, displayName, updateName, setDisplayName, clearDisplayName } = this.props;
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
          name={ 'setName-btn' }
          disableTrigger={ newName }
          func={ setDisplayName }
        />
        <Button
          btnText={ 'RESET' }
          name={ 'resetName-btn' }
          disableTrigger={ displayName }
          func={ clearDisplayName }
        />
      </div>
    );
  }
}

export default Settings;
