import React, {Component} from 'react';
import Websocket from 'react-websocket';

class WebsocketComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result);
  }

  render() {
    return (
      <Websocket url='ws://15e63168.ngrok.io' onMessage={this.handleData.bind(this)}/>
    );
  }
}

export default WebsocketComponent;