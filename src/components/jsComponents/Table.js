import React, { Component } from 'react';
import TableBody from './TableBody.js';
import TableHeadRow from './TableHeadRow.js';
import '../cssComponents/Table.css';

class Table extends Component {
  constructor(props){
    super(props);
    this.handleSort = this.handleSort.bind(this);
    this.rowNames = {
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: 'Phone',
      age: 'Age'
    }
  }
  handleSort(name){
    let prop;
    for(let propertie in this.rowNames){
      if(this.rowNames[propertie] == name){
        prop = propertie
      }
    }
    this.props.onSort(prop);
  }
  render() {
    return (
      <div className="Table">
        <TableHeadRow rowNames={this.rowNames} onSort={this.handleSort}/>
        <TableBody people={this.props.people} onDeleteRow={this.props.onDeleteRow}/>
      </div>
    );
  }
}

export default Table;
