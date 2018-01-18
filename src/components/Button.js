import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    let buttonText = "Next";
    if (this.props.loading) {
      buttonText = "Loading...";
    }

    return (
      <button onClick={this.props.onButtonClick.bind(this)} className="button">
        {buttonText}
      </button>
    );
  }
}