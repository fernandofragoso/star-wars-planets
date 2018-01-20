import React, { Component } from 'react';
import './Planet.css';

export default class Planet extends Component {
  render() {
    let planetClasses = (this.props.loading ? "planet planet--loading" : "planet");
    const { population, climate, terrain, films } = this.props;

    return (
      <div className={planetClasses}>
        <header>
          <h1>{this.props.name}</h1>
        </header>
        <article>
          <div><strong>Population: </strong>{this._formatNumber(population)}</div>
          <div><strong>Climate: </strong>{climate}</div>
          <div><strong>Terrain: </strong>{terrain}</div>
          <div className="center">{this._formatFilms(films)}</div>
        </article>
      </div>
    );
  }

  //Format numbers for better visualization
  _formatNumber(number) {
    if (number !== "unknown") {
      return number.toString().split("").reverse().map((char, index) => {
        return ((index%3===0) ? `${char}.` : char);
      }).reverse().join("").slice(0, -1);
    }
    return number
  }

  //Format films information
  _formatFilms(films) {
    switch (parseInt(films)) {
      case 0:
        return "Never featured in a film";
      case 1:
        return `Featured in ${films} film`;
      default:
        return `Featured in ${films} films`;
    }
  }
}