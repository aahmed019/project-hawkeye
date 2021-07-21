import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import Draggable from 'react-draggable';
import TweetSearch from './../tweet-search/tweet-search'
import { Instructions } from './instructions';
import DashBoard from './../dashboard/dashboard_container';
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
            <TweetSearch />
        </div>


        <div className='instructions'>
         <Instructions />
         </div>
      </div>
    )
  }
}

export default MainIndex;