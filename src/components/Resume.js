import React, {Component} from 'react';

class Resume extends Component {
  renderDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }

  dailyAmount = (rooming, price) => {
    return (rooming.ad * price.ad +
            rooming.ad34 * price.ad34 +
            rooming.chd3 * price.chd3 +
            rooming.chd4 * price.chd4 +
            rooming.inf * price.inf +
            rooming.animal * price.animal +
            rooming.culla * price.culla +
            rooming.sing * price.sing);
  }

  renderTable = (days, prices, rooming) => {
    let result = [];
    for(let i=0; i < days.length; i++) {
      for(let j=0; j < days[i][1].length; j++) {
        result.push(<tr>
                      <td>{this.renderDate(days[i][1][j])}</td>
                      <td>{rooming.ad} x {prices[i][1].ad} €</td>
                      <td>{rooming.ad34} x {prices[i][1].ad34} €</td>
                      <td>{rooming.chd3} x {prices[i][1].chd3} €</td>
                      <td>{rooming.chd4} x {prices[i][1].chd4} €</td>
                      <td>{rooming.inf} x {prices[i][1].inf} €</td>
                      <td>{rooming.animal} x {prices[i][1].animal} €</td>
                      <td>{rooming.culla} x {prices[i][1].culla} €</td>
                      <td>{rooming.sing} x {prices[i][1].sing} €</td>
                      <td>{this.dailyAmount(rooming, prices[i][1])} €</td>
                    </tr>);
      }
    }
    result.push(<tr>
                  <th>{result.length} days</th>
                  <th>{rooming.ad}</th>
                  <th>{rooming.ad34}</th>
                  <th>{rooming.chd3}</th>
                  <th>{rooming.chd4}</th>
                  <th>{rooming.inf}</th>
                  <th>{rooming.animal}</th>
                  <th>{rooming.culla}</th>
                  <th>{rooming.sing}</th>
                  <th>{this.props.total} €</th>
                </tr>);
    return result;
  }

  render() {
    const {days, prices, rooming} = this.props;
    return(
      <>
        {this.renderTable(days, prices, rooming)}
      </>
    );
  }

}

export default Resume;
