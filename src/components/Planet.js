import React, { Component } from 'react';
import './Planet.css';

export default class Planet extends Component {
  render() {
    return (
      <div>
        <div className="planet">
          <header>
            <h1>{this.props.name}</h1>
          </header>
          <article>
            <section>
              <strong>Population: </strong>
              {this.props.population}
            </section>
            <section>
              <strong>Climate: </strong>
              {this.props.climate}
            </section>
            <section>
              <strong>Terrain: </strong>
              {this.props.terrain}
            </section>
            <section>
              Featured in {this.props.films} film(s)
            </section>
          </article>
        </div>
      </div>
    );
  }
}