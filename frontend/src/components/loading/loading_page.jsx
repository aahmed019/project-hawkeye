import React from 'react';

class LoadingPage extends React.Component{
  render(){
    return(
      <div className="loading-page">
        <div className="components">
          <div className="loading-icon-container">
            <div className="loading-icon"></div>
          </div>
          <div className="heading">
            <h1>Loading</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default LoadingPage;