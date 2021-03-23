import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newPhone = this.getPhone.value;
  const data = {
    newName,
    newPhone
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.postHour.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.postHour.name} placeholder="Enter Name" /><br /><br />
    <input required type="text" ref={(input) => this.getPhone = input}
    defaultValue={this.props.postHour.phone} placeholder="Enter Phone" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);