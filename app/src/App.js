import React, {Component} from 'react';
import Home from './Home/index.js';
import Event from './Event/index.js';
import Silence from './Silence/index.js';
import Share from './Share/index.js';

class App extends Component {
  socketUrl = 'ws://15e63168.ngrok.io';

  render() {
    const home = (
      <Home />
    );

    const event = (
      <Event />
    );

    const silence = (
      <Silence socketUrl={this.socketUrl} handleCount={this.handleCount} />
    );

    const share = (
      <Share />
    );

    let pageNumber = 0;
    let page;

    switch(pageNumber) {
      case 0:
        page = home;
        break;
      case 1:
        page = event;
        break;
      case 2:
        page = silence;
        break;
      case 3:
        page = share;
        break;
      default:
        // panic!!
        break;
    }

    return (
      <div>
        <div id="header" class="o-branding">
          <img src="/img/logo.svg" class="o-branding__logo" />
        </div>
        {page}
      </div>
    );
  }
}

export default App;
