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
      age: '',
      firstNameValid: true,
      lastNameValid: true,
      phoneNumberValid: true,
      ageValid:true
    };
  }
  AllValid(){
    if(this.state.firstNameValid && this.state.lastNameValid && this.state.phoneNumberValid && this.state.ageValid){
      return true;
    } else {
      return false;
    }
  }
  handleFirstNameInputChange(e){
    e.target.value.match(/^[a-zA-Z ]{2,30}$/i) ? this.setState({firstNameValid: true}) : this.setState({firstNameValid: false});
    this.setState({firstName: e.target.value});
  }
  handleLastNameInputChange(e){
    e.target.value.match(/^[a-zA-Z ]{2,30}$/i) ? this.setState({lastNameValid: true}) : this.setState({lastNameValid: false});
    this.setState({lastName: e.target.value});
  }
  handlephoneNumberInputChange(e){
    e.target.value.match(/[^0-9]/i) ? this.setState({phoneNumberValid: false}) : this.setState({phoneNumberValid: true});
    this.setState({phoneNumber: e.target.value});
  }
  handleAgeInputChange(e){
    e.target.value.match(/[^0-9]/i) ? this.setState({ageValid: false}) : this.setState({ageValid: true});
    this.setState({age: e.target.value});
  }
  handleAddMan(e){
    if(this.AllValid()){
      this.setState({age: parseInt(this.state.age)});
      this.props.onAddMan({
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        age: this.state.age
      });
      this.setState({firstName: ''});
      this.setState({lastName: ''});
      this.setState({phoneNumber: ''});
      this.setState({age: ''});
    } else {
      alert("Not all fields are valid");
    }
    e.preventDefault();
  }
  render() {
    let firstNameColor = this.state.firstNameValid===true?"green":"red";
    let lastNameColor = this.state.lastNameValid===true?"green":"red";
    let phoneNumberColor = this.state.phoneNumberValid===true?"green":"red";
    let ageColor = this.state.ageValid===true?"green":"red";
    return (
      <div className="Form">
        <form onSubmit={this.handleAddMan}>
          <input className='firstNameInput formInput' spellCheck="false" type='text' onChange={this.handleFirstNameInputChange} value={this.state.firstName} style={{borderColor:firstNameColor}}></input>
          <input className='lastNameInput formInput' spellCheck="false" type='text' onChange={this.handleLastNameInputChange} value={this.state.lastName} style={{borderColor:lastNameColor}}></input>
          <input className='phoneNumberInput formInput' spellCheck="false" type='text' onChange={this.handlephoneNumberInputChange} value={this.state.phoneNumber} style={{borderColor:phoneNumberColor}}></input>
          <input className='ageInput formInput' spellCheck="false" type='text' onChange={this.handleAgeInputChange} value={this.state.age} style={{borderColor:ageColor}}></input>
          <input className='inputButton' type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default Form;
