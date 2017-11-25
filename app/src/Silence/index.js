import React, {Component} from 'react';
import Count from './Count.js';
import WebsocketComponent from './WebsocketComponent.js';

class Silence extends Component {
  render() {
    return (
      <div className="c-breathe" style={{backgroundColor: '#222'}}>
        <div className="c-breathe__inner">
          <Count count={this.props.totalCount}/>

          <WebsocketComponent socketUrl={this.props.socketUrl} handleCount={this.props.handleCount} />

          <div className="pulser"></div>
        </div>
      </div>
    );
  }
}

export default Silence;
