import React from 'react';
import PropTypes from 'prop-types';

const Rooming = props =>
  <div class="list">
    <p style={{textAlign: "center"}}>Rooming</p>
    <p>______________________</p>
    <p>______________________</p>
    <div className="rooming">
      <label>adulti</label>
      <input id="ad" type="number" value={props.value.ad} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>adulti 3-4 letto</label>
      <input id="ad34" type="number" value={props.value.ad34} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>chd 3 letto</label>
      <input id="chd3" type="number" value={props.value.chd3} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>chd 4 letto</label>
      <input id="chd4" type="number" value={props.value.chd4} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>infant</label>
      <input id="inf" type="number" value={props.value.inf} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>animal</label>
      <input id="animal" type="number" value={props.value.animal} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>culla</label>
      <input id="culla" type="number" value={props.value.culla} onChange={props.updateComposition}/>
    </div>
    <div className="rooming">
      <label>Supp. singola</label>
      <input id="sing" type="number" value={props.value.sing} onChange={props.updateComposition}/>
    </div>
  </div>

Rooming.propTypes = {
  value: PropTypes.object.isRequired,
  updateComposition: PropTypes.func.isRequired
}

export default Rooming;
