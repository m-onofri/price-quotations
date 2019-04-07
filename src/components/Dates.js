import React from 'react';
import PropTypes from 'prop-types';

const Dates = props =>
  <>
    <input
      id="start"
      type="date"
      value={props.valueArr}
      onChange={props.updateArrival} />
    <input
      id="end"
      type="date"
      value={props.valueDep}
      onChange={props.updateDeparture} />
  </>

Dates.propTypes = {
  valueArr: PropTypes.string.isRequired,
  valueDep: PropTypes.string.isRequired,
  updateArrival: PropTypes.func.isRequired,
  updateDeparture: PropTypes.func.isRequired
}

export default Dates;
