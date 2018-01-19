import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    let btClasses = (this.props.loading ? "button--disabled" : "button");

    return (
      <button onClick={this.props.onButtonClick.bind(this)} className={btClasses}>
        NEXT
      </button>
    );
  }
}