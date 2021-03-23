import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import HourForm from './HourForm';
import PostHour from './PostHour';
import Hour from './Hour';

class ModalExample extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <span onClick={this.handleOpenModal}> 09:00 a.m.
          {this.props.postsHour.map((postHour) => (
            <div key={postHour.id}>
              {<PostHour key={postHour.id} postHour={postHour} />}
            </div>
          ))}
        </span>
        <ReactModal 
           isOpen={this.state.showModal}
           ariaHideApp={false}
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <Hour />
          <HourForm />
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsHour: state,
  }
}
const props = {};


export default connect(mapStateToProps)(ModalExample);