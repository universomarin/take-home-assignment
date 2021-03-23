import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostEditHour from './PostEditHour';
import EditComponent from './EditComponent';

class Hour extends Component {
  render() {
    return (
      <div>
        {this.props.postsHour.map((postHour) => (
          <div key={postHour.id}>
            {postHour.editing ? 
            <EditComponent postHour={postHour} key={postHour.id} /> : 
            <PostEditHour key={postHour.id} postHour={postHour} />
            }
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsHour: state,
  }
}
export default connect(mapStateToProps)(Hour);