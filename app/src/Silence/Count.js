import React, {Component} from 'react';

class Count extends Component {
  render() {
    console.log('Viewers: ' + this.props.count);

    return (
      <div className="o-viewer-count">
        {this.props.count}
      </div>
    );
  }
}

export default Count;