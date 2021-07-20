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
      <div className="workspace-container">
        <div className="main-workspace">
          
        </div>
      </div>
    )
  }
}

export default connect(mSTP, mDTP)(Workspace)