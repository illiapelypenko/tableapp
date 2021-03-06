import React, { Component } from 'react';
import TableRow from './TableRow.js';

class TableBody extends Component {
  render() {
    return (
      <div className="TableBody">
        {this.props.people.map(man => {
          return <TableRow key={man.id} man={man} onDeleteRow={this.props.onDeleteRow}/>;
        })}
      </div>
    );
  }
}

export default TableBody;