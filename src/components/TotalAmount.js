import React from 'react';
import PropTypes from 'prop-types';

const TotalAmount = props => <h1 id="totalAmount">Total: {props.total} €</h1>

TotalAmount.propTypes = {total: PropTypes.number.isRequired}

export default TotalAmount;
