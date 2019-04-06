import React from 'react';
import Prices from './Prices.js';

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

export default PricesList;
