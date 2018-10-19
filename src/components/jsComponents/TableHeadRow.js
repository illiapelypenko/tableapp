import React, { Component } from 'react';
import TableHeadCell from './TableHeadCell.js';
import '../cssComponents/TableHeadRow.css';

class TableHeadRow extends Component {
  render() {
    return (
      <div className="TableHeadRow">
        {Object.keys(this.props.rowNames).map(name => {
          if(name != 'id'){
            //additional class - property name(for css)
            return <TableHeadCell rowName={this.props.rowNames[name]} additionalClass={name} onSort={this.props.onSort}/>;
          }
        })}
      </div>
    );
  }
}

export default TableHeadRow;