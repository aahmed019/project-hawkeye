import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import TweetSearch from '../tweet-search/tweet-search';
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