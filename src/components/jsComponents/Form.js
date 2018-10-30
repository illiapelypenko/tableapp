import React, { Component } from 'react';
import '../cssComponents/Form.css';

class Form extends Component {
  constructor(){
    super();
    this.handleFirstNameInputChange = this.handleFirstNameInputChange.bind(this);
    this.handleLastNameInputChange = this.handleLastNameInputChange.bind(this);
    this.handlephoneNumberInputChange = this.handlephoneNumberInputChange.bind(this);
    this.handleAgeInputChange = this.handleAgeInputChange.bind(this);
    this.handleAddMan = this.handleAddMan.bind(this);
    this.state = {
      id: null,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: ''
    };
  }
  handleFirstNameInputChange(e){
    this.setState({firstName: e.target.value});
  }
  handleLastNameInputChange(e){
    this.setState({lastName: e.target.value});
  }
  handlephoneNumberInputChange(e){
    this.setState({phoneNumber: e.target.value});
  }
  handleAgeInputChange(e){
    if(parseInt(e.target.value) != NaN){
      this.setState({age: parseInt(e.target.value)});
    }
  }
  handleAddMan(e){
    this.props.onAddMan(this.state);
    this.setState({firstName: ''});
    this.setState({lastName: ''});
    this.setState({phoneNumber: ''});
    this.setState({age: ''});
    e.preventDefault();
  }
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleAddMan}>
          <input className='firstNameInput formInput' spellCheck="false" type='text' onChange={this.handleFirstNameInputChange} value={this.state.firstName}></input>
          <input className='lastNameInput formInput' spellCheck="false" type='text' onChange={this.handleLastNameInputChange} value={this.state.lastName}></input>
          <input className='phoneNumberInput formInput' spellCheck="false" type='text' onChange={this.handlephoneNumberInputChange} value={this.state.phoneNumber}></input>
          <input className='ageInput formInput' spellCheck="false" type='text' onChange={this.handleAgeInputChange} value={this.state.age}></input>
          <input className='inputButton' type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default Form;
