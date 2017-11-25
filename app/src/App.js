import React, {Component} from 'react';
import Home from './Home/index.js';
import Event from './Event/index.js';
import Silence from './Silence/index.js';
import Share from './Share/index.js';

class App extends Component {
  socketUrl = 'ws://15e63168.ngrok.io';

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalCount: 0,
    };

    this.pageChange = this.pageChange.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  pageChange(page) {
    console.log(page);
    this.setState(
      {
        page: page,
      }
    )
  }

  handleCount(count) {
    console.log(count);
    this.setState(
      {
        totalCount: count,
      }
    )
  }

  render() {
    const home = (
      <Home pageChange={this.pageChange} />
    );

    const event = (
      <Event pageChange={this.pageChange} />
    );

    const silence = (
      <Silence pageChange={this.pageChange} socketUrl={this.socketUrl} totalCount={this.state.totalCount} handleCount={this.handleCount} />
    );

    const share = (
      <Share pageChange={this.pageChange} />
    );

    let page;
    
    switch(this.state.page) {
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
        {page}
      </div>
    );
  }
}

export default App;
