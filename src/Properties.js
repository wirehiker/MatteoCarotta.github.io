import React, { Component } from 'react';
import properties from './img/Dashboard4.1--Properties.png';
import {Link} from "react-router-dom";

export default class Properties extends Component {
  render() {
    return (
      <Link to="/survey">
          <img src={properties} style={{width: "100%"}}  />
      </Link>
    );
  }
}
