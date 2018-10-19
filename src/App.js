import React, { Component } from 'react';
import './App.css';
import Table from './components/jsComponents/Table.js';
import Form from './components/jsComponents/Form.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      people: [
        {
          id: 0,
          firstName: 'Harry',
          lastName: 'Potter',
          phoneNumber: '0987654321',
          age: 11
        },
        {
          id: 1,
          firstName: 'Tom',
          lastName: 'Riddle',
          phoneNumber: '0666993322',
          age: 70
        },
        {
          id: 2,
          firstName: 'Albus',
          lastName: 'Dumbuldor',
          phoneNumber: '0336669911',
          age: 80
        },
        {
          id: 3,
          firstName: 'Sirius',
          lastName: 'Black',
          phoneNumber: '0123456789',
          age: 35
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Table people={this.state.people}/>
        <Form />
      </div>
    );
  }
}

export default App;
