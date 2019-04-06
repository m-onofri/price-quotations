import React, {Component} from 'react';

class Dates extends Component {

  render() {
    return(
      <>
        <input
          id="start"
          type="date"
          value={this.props.valueArr}
          onChange={this.props.updateArrival} />
        <input
          id="end"
          type="date"
          value={this.props.valueDep}
          onChange={this.props.updateDeparture} />
      </>
    );
  }
}

export default Dates;
