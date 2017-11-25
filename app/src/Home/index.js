import React, {Component} from 'react';
import ListLinks from './ListLinks';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>Bideford</h1>
        </div>

        <div className="header-links">
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </div>

        <div className="content">
          <div className="event-search">
            <label htmlFor="event-search">Discover remembrence events</label>
            <input type="text" name="event-search" id="event-search" />
            <button type="submit" value="Search" />
          </div>
          <h2>Upcoming remembrence events</h2>
        </div>

        <ListLinks pageChange={this.props.pageChange} />
      </div>
    );
  }
}

export default Home;
