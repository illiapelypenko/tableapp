import React, { Component } from 'react';
import '../cssComponents/TableCell.css';

class TableCell extends Component {
  render() {
    return (
      <div className={"TableCell " + this.props.additionalClass}>
        {this.props.prop}
      </div>
    );
  }
}

export default TableCell;