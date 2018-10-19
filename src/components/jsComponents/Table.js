import React, { Component } from 'react';
import TableBody from './TableBody.js';
import '../cssComponents/Table.css';
import TableRow from './TableRow.js';

class Table extends Component {
  render() {
    let rowNames = {
      firstName: 'First Name',
      lastName: 'Last Name',
      phoneNumber: 'Phone',
      age: 'Age'
    }
    return (
      <div className="Table">
        <TableRow man={rowNames} additionalClass='HeadRow'/>
        <TableBody people={this.props.people}/>
      </div>
    );
  }
}

export default Table;
