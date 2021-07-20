import React from 'react';
import { connect } from 'react-redux'


const mSTP = state => ({

});

const mDTP = dispatch => ({

});

class Workspace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Workspace</h1>
    )
  }
}

export default connect(mSTP, mDTP)(Workspace)