import React from 'react';
import Prices from './Prices.js';
import PropTypes from 'prop-types';

const PricesList = props =>
  <>
    {props.prices.map((price, i) => {
      return <Prices
               days={props.days[i][1]}
               id={price[0]}
               value={price[1]}
               updatePrezzi={props.updatePrezzi}/>
    })}
  </>

PricesList.propTypes = {
  prices: PropTypes.array.isRequired,
  days: PropTypes.array.isRequired,
  updatePrezzi: PropTypes.func.isRequired
}

export default PricesList;
