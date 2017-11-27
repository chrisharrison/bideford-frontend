import React, {Component} from 'react';
import Home from './Home/index.js';
import Event from './Event/index.js';
import Join from './Join/index.js';
import Silence from './Silence/index.js';
import Share from './Share/index.js';
import Notify from './Notify/index.js';
import Memoria from './Memoria/index.js';

class App extends Component {
  socketUrl = 'ws://46.101.42.221:8999';

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalCount: 0,
    };

    this.homeView = this.homeView.bind(this);
    this.eventView = this.eventView.bind(this);
    this.joinView = this.joinView.bind(this);
    this.silenceView = this.silenceView.bind(this);
    this.shareView = this.shareView.bind(this);
    this.notifyView = this.notifyView.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.memoriaView = this.memoriaView.bind(this);
  }

  homeView(e) {
    e.preventDefault();
    this.pageChange(0);
  }

  eventView(e) {
    e.preventDefault();
    this.pageChange(1);
  }

  silenceView(e) {
    e.preventDefault();
    this.pageChange(2);
  }

  shareView(e) {
    e.preventDefault();
    this.pageChange(6);
  }

  notifyView(e) {
    e.preventDefault();
    this.pageChange(4);
  }

  joinView(e) {
    e.preventDefault();
    this.pageChange(5);
  }

  memoriaView(e) {
    e.preventDefault();
    this.pageChange(6);
  }

  pageChange(page) {
    this.setState(
      {
        page: page,
      }
    )
  }

  handleCount(count) {
    this.setState(
      {
        totalCount: count,
      }
    )
  }

  render() {
    const home = (
      <Home eventView={this.eventView} pageChange={this.pageChange} />
    );

    const event = (
      <Event silenceView={this.silenceView} notifyView={this.notifyView} shareView={this.shareView} pageChange={this.pageChange} />
    );

    const join = (
      <Join silenceView={this.silenceView} pageChange={this.pageChange} />
    );

    const silence = (
      <Silence pageChange={this.pageChange} socketUrl={this.socketUrl} totalCount={this.state.totalCount} handleCount={this.handleCount} />
    );

    const share = (
      <Share homeView={this.homeView} pageChange={this.pageChange} />
    );

    const notify = (
      <Notify joinView={this.joinView} pageChange={this.pageChange} />
    );

    const memoria = (
      <Memoria homeView={this.homeView} memoriaView={this.memoriaView} pageChange={this.pageChange} />
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
      case 4:
        page = notify;
        break;
      case 5:
        page = join;
        break;
      case 6:
        page = memoria;
        break;
      default:
        // panic!!
        break;
    }

    return (
      <div className="bideford-app">

        {page}
      </div>
    );
  }
}

export default App;
