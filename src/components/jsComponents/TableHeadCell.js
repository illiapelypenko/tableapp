import React, { Component } from 'react';
import '../cssComponents/TableHeadCell.css';

class TableHeadCell extends Component {
  constructor(props){
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(){
    this.props.onSort(this.props.rowName);
  }
  render() {
    return (
      <div className={"TableHeadCell " + this.props.additionalClass} onClick={this.handleSort}>
        {this.props.rowName}
      </div>
    );
  }
}

export default TableHeadCell;