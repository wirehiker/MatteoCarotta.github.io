import React, { Component } from 'react';
import Properties from "./Properties";
import Survey from "./Survey";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Properties}/>
                <Route exact path="/properties" component={Properties}/>
                <Route exact path="/survey" component={Survey}/>
            </div>
        </Router>
    );
  }
}

export default App;
