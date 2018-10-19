import React, { Component } from 'react';
import './App.css';
import Table from './components/jsComponents/Table.js';
import Form from './components/jsComponents/Form.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sortOn: 'default',
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
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.Sort = this.Sort.bind(this);
  }
  handleDeleteRow(man){
    let newPeople = this.state.people.slice();
    newPeople.splice(this.state.people.indexOf(man), 1);
    this.setState({people: newPeople});
  }
  handleSort(prop){
    this.setState({sortOn: prop});
  }
  Sort(a, b){//   a = men1   b = men2
    switch(this.state.sortOn){
      default:
        if(a[this.state.sortOn] > b[this.state.sortOn]){
          return 1;
        }
        if(a[this.state.sortOn] < b[this.state.sortOn]){
          return -1;
        }
        return 0;
      case 'age':
        return a.age - b.age;
    }
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.sortOn)}
        <Table people={this.state.people.sort((a, b)=>{return this.Sort(a, b)})} onDeleteRow={this.handleDeleteRow} onSort={this.handleSort}/>
        <Form />
      </div>
    );
  }
}

export default App;
