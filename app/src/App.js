import React, {Component} from 'react';
import Home from './Home/index.js';
import Event from './Event/index.js';
import Join from './Join/index.js';
import Silence from './Silence/index.js';
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

  memoriaView(e) {
    e.preventDefault();
    this.pageChange(3);
  }

  notifyView(e) {
    e.preventDefault();
    this.pageChange(4);
  }

  joinView(e) {
    e.preventDefault();
    this.pageChange(5);
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
      <Home eventView={this.eventView} />
    );

    const event = (
      <Event silenceView={this.silenceView} notifyView={this.notifyView} memoriaView={this.memoriaView} />
    );

    const join = (
      <Join silenceView={this.silenceView} memoriaView={this.memoriaView} />
    );

    const memoria = (
      <Memoria memoriaView={this.memoriaView} />
    );

    const notify = (
      <Notify joinView={this.joinView} />
    );

    const silence = (
      <Silence socketUrl={this.socketUrl} totalCount={this.state.totalCount} handleCount={this.handleCount} />
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
        page = memoria;
        break;
      case 4:
        page = notify;
        break;
      case 5:
        page = join;
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
