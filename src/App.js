import React, { Component } from 'react';
import './App.css';
import Table from './components/jsComponents/Table.js';
import Form from './components/jsComponents/Form.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sortState: {
        firstName: 'default',
        lastName: 'default',
        phoneNumber: 'default',
        age: 'default'
      },//reverse or default
      sortOn: 'default',
      people: []
    }
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.Sort = this.Sort.bind(this);
    this.handleAddMan = this.handleAddMan.bind(this);
  }
  componentDidMount() {
    this.updatePeople();
  }
  updatePeople(){
    let people = JSON.parse(localStorage.getItem('people'));
    for(let man of people){
      man.id = people.indexOf(man);
    }
    this.setState({people});
  }
  handleDeleteRow(man){
    let newPeople = this.state.people.slice();
    newPeople.splice(this.state.people.indexOf(man), 1);
    localStorage.setItem('people', JSON.stringify(newPeople));
    this.updatePeople();
  }
  handleSort(prop){
    if(this.state.sortState[prop] === 'reverse'){
      this.setState(prevState => ({
        sortState: {
            ...prevState.sortState,
            [prop]: 'default'
        }
    }));
    } else if (this.state.sortState[prop] === 'default'){
      this.setState(prevState => ({
        sortState: {
            ...prevState.sortState,
            [prop]: 'reverse'
        }
    }));
    }
    this.setState({sortOn: prop});//по каком свойству сортировать
  }
  Sort(a, b){//   a = men1   b = men2

    if(this.state.sortState[this.state.sortOn] === 'default'){
      switch(this.state.sortOn){      
        case 'age':
          return a.age - b.age;
        default:
          if(a[this.state.sortOn] > b[this.state.sortOn]){
            return 1;
          }
          if(a[this.state.sortOn] < b[this.state.sortOn]){
            return -1;
          }
          return 0;
      }
    } else {
      switch(this.state.sortOn){      
        case 'age':
          return b.age - a.age;
        default:
          if(a[this.state.sortOn] > b[this.state.sortOn]){
            return -1;
          }
          if(a[this.state.sortOn] < b[this.state.sortOn]){
            return 1;
          }
          return 0;
      }
    }
    
  }
  handleAddMan(man){//добавить валидацию
    man.id = this.state.people.length+1;
    let people = this.state.people.slice(0);
    people.push(man);
    localStorage.setItem('people', JSON.stringify(people));
    this.updatePeople();
  }
  render() {
    console.log("render");
    console.log(this.state.people);
    return (
      <div className="App">
        <Table people={this.state.people.sort((a, b)=>{return this.Sort(a, b)})} onDeleteRow={this.handleDeleteRow} onSort={this.handleSort}/>
        <Form onAddMan={this.handleAddMan}/>
      </div>
    );
  }
}

export default App;
