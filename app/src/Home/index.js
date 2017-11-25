import React, {Component} from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header-links">
          <ul>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </div>

        <div className="content">
          <div className="event-search">
            <label for="event-search">Discover remembrence events</label>
            <input type="text" name="event-search" id="event-search" />
            <button type="submit" value="Search" />
          </div>
          <h2>Upcoming remembrence events</h2>
        </div>

        <div className="list-links">
          <ul>
            <li>Event 4</li>
            <li>Event 5</li>
            <li>Event 6</li>
            <li>Event 7</li>
            <li>Event 8</li>
            <li>Event 9</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
