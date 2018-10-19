import React, { Component } from 'react';
import TableCell from './TableCell.js';
import '../cssComponents/TableRow.css';
import '../cssComponents/HeadRow.css';

class TableRow extends Component {
  render() {
    return (
      <div className={this.props.additionalClass ? "TableRow " + this.props.additionalClass : "TableRow"} >
        {Object.keys(this.props.man).map(prop => {
          if(prop != 'id'){
            //additional class - property name(for css)
            return <TableCell prop={this.props.man[prop]} additionalClass={prop}/>;
          }
        })}
      </div>
    );
  }
}

export default TableRow;