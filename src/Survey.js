import React, { Component } from 'react';
import survey from './img/Dashboard4.1--Survey.png';

export default class Survey extends Component {
  render() {
    return (
      <div>
          <img src={survey} style={{width: "100%"}}/>
      </div>
    );
  }
}
