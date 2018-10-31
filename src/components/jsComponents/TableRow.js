import React, { Component } from 'react';
import TableCell from './TableCell.js';
import '../cssComponents/TableRow.css';

class TableRow extends Component {
  constructor(props){
    super(props);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
  }
  handleDeleteRow(){
    this.props.onDeleteRow(this.props.man);
  }
  render() {
    return (
      <div className='TableRow'>
        {Object.keys(this.props.man).map(prop => {
          if(prop != 'id'){
            //additional class - property name(for css)
            return <TableCell prop={this.props.man[prop]} additionalClass={prop}/>;
          }
        })}
        <button onClick={this.handleDeleteRow}>Delete</button>
      </div>
    );
  }
}

export default TableRow;