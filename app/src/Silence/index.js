import React, {Component} from 'react';
import Count from './Count.js';
import WebsocketComponent from './WebsocketComponent.js';

class Silence extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCount: 0,
    };

    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(count) {
    this.setState(
      {
        totalCount: count,
      }
    )
  }

  render() {
    return (
      <div classname="c-breathe">
        <div className="c-breathe__inner silence">
          <Count count={this.state.totalCount}/>

          <WebsocketComponent socketUrl={this.props.socketUrl} handleCount={this.handleCount} />

          <div className="pulser"></div>
        </div>
      </div>
    );
  }
}

export default Silence;
