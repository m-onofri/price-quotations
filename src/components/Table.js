import React from 'react';
import Resume from './Resume.js';

const Table = props =>
<table>
  <tr>
    <th>Date</th>
    <th>Adulti</th>
    <th>Adulti 3-4 letto</th>
    <th>Chd 3 letto</th>
    <th>Chd 4 letto</th>
    <th>Infant</th>
    <th>Animali</th>
    <th>Culla</th>
    <th>Supp. singola</th>
    <th>Total</th>
  </tr>
  <Resume
    days={props.days}
    prices={props.prices}
    rooming={props.rooming}
    total={props.total}/>
</table>

export default Table;
