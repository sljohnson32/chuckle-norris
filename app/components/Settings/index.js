import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import ParentalControls from '../ParentalControls';
import './settings-style';


class Settings extends Component {

  render() {
    const { newName, displayName, updateName, setDisplayName, clearDisplayName, updateControls, parentalControls } = this.props;
    return (
      <div className='settings'>
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
          disableTrigger={ !newName }
          func={ setDisplayName }
        />
        <Button
          btnText={ 'RESET' }
          name={ 'resetName-btn' }
          disableTrigger={ !displayName }
          func={ clearDisplayName }
        />
        <ParentalControls
          updateControls={ updateControls }
          parentalControls={ parentalControls }
        />
      </div>
    );
  }
}

Settings.propTypes = {
  newName: React.PropTypes.string,
  displayName: React.PropTypes.string,
  updateName: React.PropTypes.func,
  setDisplayName: React.PropTypes.func,
  clearDisplayName: React.PropTypes.func,
  updateContorls: React.PropTypes.func,
  parentalControls: React.PropTypes.bool,

}

export default Settings;
