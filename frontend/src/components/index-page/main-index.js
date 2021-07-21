import React from 'react';
import NavBarContainer from '../nav/navbar_container';
<<<<<<< HEAD
import Draggable from 'react-draggable';
import TweetSearch from '../tweet-search/tweet-search';
=======
import DashBoard from './dashboard';
// import Draggable from 'react-draggable';
>>>>>>> 71bfc77ee16d110c7160cd90d087136fd59f03b4
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
          <div>
            <h1>Instructions</h1>
          </div>
            <p>
            Searching and filtering Tweets

            Use twitter usernames and filter words to find tweets containing the words you want to appear in the tweet. 
            Clicking on individual tweets will redirect you to one's actual tweet once the results are loaded. 
            </p>

            <p>
            Creating workspaces and Folders

            Workspaces can be customized on the side. 
            Creating a workspace allows you to create custom folders for saving your tweet results. 
            </p>
        </div>
      </div>
    )
  }
}

export default MainIndex;