import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import DashBoard from './dashboard';
// import Draggable from 'react-draggable';
class MainIndex extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='main-index-container'>
        <NavBarContainer />
        <div className='main-index-sidebar'>
          <DashBoard/>
        </div>



        <div className='main-index-tweets'>
            <h1>Search Tweet</h1>
        </div>


        <div className='instructions'>
          <h1>Instructions</h1>
        </div>
      </div>
    )
  }
}

export default MainIndex;