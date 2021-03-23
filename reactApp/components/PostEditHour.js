import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostEditHour extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.postHour.name}</h2>
        <p>{this.props.postHour.phone}</p>
        <button
        onClick={()=>this.props.dispatch({type:'EDIT_DATE',id:this.props.postHour.id})}>
        Edit</button>
      </div>
    );
  }
}
export default connect()(PostEditHour);