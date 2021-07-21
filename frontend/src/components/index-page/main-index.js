import React from 'react';

class MainIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-index-container'>
        <div className='main-index-sidebar'>
          <div className='workspace'>Workspace</div>
  
        </div>



        <div className='main-index-tweets'>
          <h1>Search Tweet</h1>
        </div>
      </div>
    )
  }
}

export default MainIndex;