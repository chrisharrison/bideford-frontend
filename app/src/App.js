import React, {Component} from 'react';
import Count from './Count.js';
import WebsocketComponent from './WebsocketComponent.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCount: 0,
    };

    this.handleCount = this.handleCount.bind(this);
  }

  socketUrl = 'ws://15e63168.ngrok.io';

  handleCount(count) {
    this.setState(
      {
        totalCount: count,
      }
    )
  }

  render() {
    return (
      <div className="c-breathe__inner" id="root">
        <Count count={this.state.totalCount}/>

        <WebsocketComponent socketUrl={this.socketUrl} handleCount={this.handleCount} />

        <div className="pulser"></div>
      </div>
    );
  }
}

export default App;
