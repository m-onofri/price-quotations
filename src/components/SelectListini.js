import React from 'react';
import PropTypes from 'prop-types';

const SelectListini = props =>
  <select
    id="listini"
    name="listini"
    onChange={props.updateListino}
    value={props.value}>
    <option value="ALL_INCLUSIVE">All-Inclusive</option>
    <option value="ALL_INC_PP">All-Inclusive_PP</option>
    <option value="LIDL">LIDL</option>
    <option value="LIDL_PP">LIDL_PP</option>
  </select>

SelectListini.propTypes = {
  value: PropTypes.string.isRequired,
  updateListino: PropTypes.func.isRequired
}

export default SelectListini;
