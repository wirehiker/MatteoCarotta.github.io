import React, { Component } from 'react';
import survey from './img/Dashboard4.1--Survey.png';
import {Link} from "react-router-dom";

export default class Survey extends Component {
  render() {
    return (
      <Link to="/properties">
          <img src={survey} style={{width: "100%"}}/>
      </Link>
    );
  }
}
