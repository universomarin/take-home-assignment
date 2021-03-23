import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostHour extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.postHour.name}</h2>
        <p>{this.props.postHour.phone}</p>
      </div>
    );
  }
}
export default connect()(PostHour);