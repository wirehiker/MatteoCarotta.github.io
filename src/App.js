import React, { Component } from 'react';
import properties from './img/Dashboard4.1--Properties.png';
import survey from './img/Dashboard4.1--Survey.png';

class App extends Component {
  render() {
    return (
      <div>
          <img src={survey} style={{width: "100%"}}/>
          <img src={properties} style={{width: "100%"}}  />
      </div>
    );
  }
}

export default App;
