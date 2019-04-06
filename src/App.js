import React, { Component } from 'react';
import Dates from './components/Dates.js';
import SelectListini from './components/SelectListini.js';
import Rooming from './components/Rooming.js';
import Listini from './components/Listini.js';
import Prezzi from './components/Prezzi.js';
import Resume from './components/Resume.js';
import './App.css';

class App extends Component {
  state = {
    loaded: false,
    arrival: undefined,
    departure: undefined,
    listino: "ALL_INCLUSIVE",
    rooming: {ad: 0, ad34: 0, chd3: 0, chd4: 0, inf: 0, animal: 0, culla: 0, sing: 0},
    days: [], //[["a", [timestamp1, timestamp2, ...], [...]]]
    prices: [] //[["a", {...}], ["b", {...}]]
  }

  twoIntString = (value) => {
    let stringValue = value.toString();
    if (stringValue.length < 2) stringValue = "0" + stringValue;
    return stringValue;
  }

  is_included = (date, startDate, endDate) => {
    if(date >= startDate && date <= endDate) return true;
    return false;
  }

  dailyAmount = (rooming, price) =>
    (rooming.ad * price.ad +
    rooming.ad34 * price.ad34 +
    rooming.chd3 * price.chd3 +
    rooming.chd4 * price.chd4 +
    rooming.inf * price.inf +
    rooming.animal * price.animal +
    rooming.culla * price.culla +
    rooming.sing * price.sing);


  totalAmount = () => {
    let totalAmount = [];
    let days = this.state.days;
    let rooming = this.state.rooming;
    let listino = this.state.listino;

    for(let i = 0; i < days.length; i++) {
      for(let j = 0; j < days[i][1].length; j++) {
        totalAmount.push(this.dailyAmount(rooming, Listini[listino][days[i][0]]));
      }
    }

    return (Math.ceil(totalAmount.reduce((a, b) => a + b) * 100) /100);
  }

  manageDays = (date, endDate) => {
    const realEndDate = endDate - 86400000;
    let daysReservation = {a: [], b: [], c: [], d: [], e: [], f: []};
    while(date <= realEndDate) {
      if(this.is_included(date, new Date("2019", "01", "15").getTime(), new Date("2019", "05", "07").getTime())) {
        daysReservation.a.push(date);
      } else if (this.is_included(date, new Date("2019", "05", "08").getTime(), new Date("2019", "05", "28").getTime())) {
        daysReservation.b.push(date);
      } else if (this.is_included(date, new Date("2019", "05", "29").getTime(), new Date("2019", "07", "09").getTime())) {
       daysReservation.c.push(date);
     } else if (this.is_included(date, new Date("2019", "07", "10").getTime(), new Date("2019", "07", "23").getTime())) {
        daysReservation.d.push(date);
      } else if (this.is_included(date, new Date("2019", "07", "24").getTime(), new Date("2019", "07", "30").getTime())) {
        daysReservation.e.push(date);
      } else if (this.is_included(date, new Date("2019", "07", "31").getTime(), new Date("2019", "11", "13").getTime())) {
        daysReservation.f.push(date);
      }
      date += 86400000;
    }
    return (Object.entries(daysReservation).filter( x => x[1].length > 0));
  }

  selectPrices = (days, listino) => days.map(x => [x[0], Listini[listino][x[0]]]);


  componentDidMount() {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const todayTimestamp = new Date(dateString).getTime();
    const tomorrowTimestamp = todayTimestamp + 86400000;

    let selectedDays = this.manageDays(todayTimestamp, tomorrowTimestamp);

    this.setState({
      loaded: true,
      arrival: todayTimestamp,
      departure: tomorrowTimestamp,
      days: selectedDays,
      prices: this.selectPrices(selectedDays, this.state.listino)
    });
  }

  getTimestamp = (event) => {
    const date = event.target.value.split("-");
    date[1] = (date[1] - 1).toString();
    return new Date(...date).getTime();
  }

  updateArrival = (event) => {
    const startDate = this.getTimestamp(event);

    if(startDate < this.state.departure) {
      let days = this.manageDays(startDate, this.state.departure);

      this.setState({
        arrival: startDate,
        days: days,
        prices: this.selectPrices(days, this.state.listino)
      });
    } else {
      this.setState({arrival: startDate});
    }
  }

  updateDeparture = (event) => {
    const endDate = this.getTimestamp(event);

    if(this.state.arrival < endDate) {
      let days = this.manageDays(this.state.arrival, endDate);

      this.setState({
        departure: endDate,
        days: days,
        prices: this.selectPrices(days, this.state.listino)
      });
    } else {
      this.setState({departure: endDate});
    }
  }

  dateValue = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${this.twoIntString(date.getMonth() + 1)}-${this.twoIntString(date.getDate())}`;
  }

  updateListino = (event) => {
    const listino = event.target.value;
    this.setState({
      listino: listino,
      prices: this.selectPrices(this.state.days, listino)
    });
  }

  updateComposition = (event) => {
    const rooming = this.state.rooming;
    const id = event.target.id;
    const value = parseInt(event.target.value);
    rooming[id] = value;
    this.setState({rooming: rooming});
  }

  updatePrezzi = (event) => {
    const prices = this.state.prices;
    const section = event.target.parentNode.id;
    const id = event.target.id;
    const value = event.target.value;
    for(let i=0; i < prices.length; i++) {
      if(prices[i][0] === section) {
        prices[i][1][id] = value;
      }
    }
    this.setState({prices: prices});
  }

  render() {
    if(this.state.loaded) {
      return (
        <div className="App">
          <div id="first_section">
            <Dates
              updateArrival={this.updateArrival}
              updateDeparture={this.updateDeparture}
              valueArr={this.dateValue(this.state.arrival)}
              valueDep={this.dateValue(this.state.departure)}/>
            <SelectListini
              value={this.state.listino}
              updateListino={this.updateListino}/>
              <h1 id="totalAmount">Total: {this.totalAmount()} €</h1>
          </div>
          <div id="second_section">
            <Rooming
              value={this.state.rooming}
              updateComposition={this.updateComposition}/>
            {this.state.prices.map((price, i) => {
              return <Prezzi
                       days={this.state.days[i][1]}
                       id={price[0]}
                       value={price[1]}
                       updatePrezzi={this.updatePrezzi}/>
            })}
          </div>
          <div id="resumeTable">
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
                days={this.state.days}
                prices={this.state.prices}
                rooming={this.state.rooming}
                total={this.totalAmount()}/>
            </table>
          </div>
        </div>
      );
    } else  {
      return "Wait...";
    }
  }
}

export default App;
