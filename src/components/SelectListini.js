import React, {Component} from 'react';

class SelectListini extends Component {
  render() {
    return(
      <select
        id="listini"
        name="listini"
        onChange={this.props.updateListino}
        value={this.props.value}>
        <option value="ALL_INCLUSIVE">All-Inclusive</option>
        <option value="ALL_INC_PP">All-Inclusive_PP</option>
        <option value="LIDL">LIDL</option>
        <option value="LIDL_PP">LIDL_PP</option>
      </select>
    );
  }
}

export default SelectListini;
