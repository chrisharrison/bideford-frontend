import React, {Component} from 'react';
import ListLinks from './ListLinks';

class Home extends Component {
  render() {
    return (
      <div>
        <div id="header" class="o-header">
          <img src="/img/logo.svg" class="o-branding__logo" />
        </div>

        <div className="header-links">
          <ul class="c-header-carousel">
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
          <div>100,473</div>
          <div>People currently observing a minutes silence</div>
        </div>

        <div className="content">
          <div className="event-search">
            <label htmlFor="event-search">Discover remembrence events</label>
            <input type="text" name="event-search" id="event-search" />
            <button type="submit" value="Search" />
          </div>
          <h2>Upcoming remembrence events</h2>
        </div>

        <ListLinks eventView={this.props.eventView} />
      </div>
    );
  }
}

export default Home;
