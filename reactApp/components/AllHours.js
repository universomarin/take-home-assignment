import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostHour from './PostHour';
import ModalExample from './ModalExample';

const test = new Date().getHours();

class AllHours extends Component {
  render() {
    return (
      <div>
        <h1>All Schedule</h1>
        {test}
        <div>
          <ModalExample /><br /><br />
        </div>
        
      </div>
    );
  console.log("test");
  }
}
export default connect()(AllHours);