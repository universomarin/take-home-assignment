import React, { Component } from 'react';
import {connect} from 'react-redux';

class HourForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const phone =  this.getPhone.value;
    const data = {
      id: new Date(),
      name,
      phone,
      editing: false
    };
    this.props.dispatch({
      type:'ADD_DATE',
      data});
    this.getName.value = '';
    this.getPhone.value = '';
  }
  render() {
    return (
      <div>
        <h1>Schedule a call</h1>
        <form onSubmit={this.handleSubmit}>
          <input required type="text" ref={(input)=>this.getName = input} 
            placeholder="Enter Name"/>
          <br /><br />
          <input required type="tel" ref={(input)=>this.getPhone = input} 
            placeholder="Enter Phone"/>
          <br /><br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default connect()(HourForm);