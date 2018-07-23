import * as React from 'react';
import { connect } from 'react-redux';
import { getFlights, selectCarrier } from './actions/flight.actions';
import { Select, OptionItem } from './components/Selector';
import Card from './components/Card';
import './style.css';

const ALL = "ALL";

class App extends React.Component {
  componentDidMount() {
    this.props.getFlights();
  }

  render() {
    const { flights, selectedCarrier } = this.props;
    const carriersArray = [ALL];
    flights.reduce((arr, el) => {
      if (arr.indexOf(el.carrier) === -1) {
        arr.push(el.carrier);
      }
      return arr;
    }, carriersArray);

    return (
      <div className="App">
        <h1>Выбор Рейсов One-Two-Trip</h1>
        <Select value={this.props.selectedCarrier} onChange={this.props.selectCarrier}>
          {
            carriersArray.map((el) => <OptionItem value={el} key={el}>{el}</OptionItem>)
          }
        </Select>
        {flights.filter((el => selectedCarrier === el.carrier || selectedCarrier === ALL))
        .map(el => <Card/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps, { getFlights, selectCarrier })(App);
