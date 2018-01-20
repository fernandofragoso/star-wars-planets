import React, { Component } from 'react';
import './App.css';
import Planet from './Planet.js';
import ButtonNext from './ButtonNext.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      count: 0,
      planet: {
        name: "Tatooine",
        climate: "arid",
        terrain: "desert",
        population: "200000",
        films: 5
      }
    }
  }

  componentWillMount() {
    //Get count of planets
    fetch("https://swapi.co/api/planets/", {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {
      this.setState({
        count: response.count
      });
      this._getPlanet();
    })
    .catch(error => {
      this._setError(error);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="flex-container">
          <div className="box">
            <Planet
              name={this.state.planet.name}
              climate={this.state.planet.climate}
              terrain={this.state.planet.terrain}
              population={this.state.planet.population}
              films={this.state.planet.films}
              loading={this.state.loading}
              error={this.state.error}
            />
          </div>
          <ButtonNext
            onButtonClick={this._getPlanet.bind(this)}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }

  _getPlanet() {
    // Set loading state
    this.setState({
      loading: true
    });
    //Get a random Planet
    let id = Math.floor(Math.random() * 60) + 1;
    fetch(`https://swapi.co/api/planets/${id}/`, {
      method: 'GET'
    }).then(res => res.json())
    .then(response => {
      //Clear loading and update planet
      this.setState({
        loading: false,
        planet: {
          name: response.name,
          climate: response.climate,
          terrain: response.terrain,
          population: response.population,
          films: response.films.length
        }
      })
    })
    .catch(error => {
      this._setError();
    });
  }

  _setError(error) {
    console.log('_setError' + error);
    this.setState({
      loading: false,
      error: true
    })
  }
}
