import React, {Component} from 'react';

class Composition extends Component {
  render() {
    return(
      <div class="list">
        <p style={{textAlign: "center"}}>Rooming</p>
        <p>______________________</p>
        <p>______________________</p>
        <div className="rooming">
          <label>adulti</label>
          <input id="ad" type="number" value={this.props.value.ad} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>adulti 3-4 letto</label>
          <input id="ad34" type="number" value={this.props.value.ad34} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>chd 3 letto</label>
          <input id="chd3" type="number" value={this.props.value.chd3} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>chd 4 letto</label>
          <input id="chd4" type="number" value={this.props.value.chd4} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>infant</label>
          <input id="inf" type="number" value={this.props.value.inf} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>animal</label>
          <input id="animal" type="number" value={this.props.value.animal} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>culla</label>
          <input id="culla" type="number" value={this.props.value.culla} onChange={this.props.updateComposition}/>
        </div>
        <div className="rooming">
          <label>Supp. singola</label>
          <input id="sing" type="number" value={this.props.value.sing} onChange={this.props.updateComposition}/>
        </div>
      </div>
    );
  }
}

export default Composition;
