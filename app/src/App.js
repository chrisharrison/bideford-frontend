import React, {Component} from 'react';
import Count from './Count.js';
import WebsocketComponent from './WebsocketComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="c-breathe__inner" id="root">
        <Count />
        <WebsocketComponent />
        <div className="pulser"></div>
      </div>
    );
  }
}

export default App;
