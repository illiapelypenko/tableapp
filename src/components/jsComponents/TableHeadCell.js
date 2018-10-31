import React, { Component } from 'react';
import '../cssComponents/TableHeadCell.css';

class TableHeadCell extends Component {
  constructor(props){
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(e){
    this.props.onSort(this.props.rowName);
    e.preventDefault();
  }
  render() {
    return (
      <button className={"TableHeadCell " + this.props.additionalClass} onClick={this.handleSort}>
        {this.props.rowName}
      </button>
    );
  }
}

export default TableHeadCell;