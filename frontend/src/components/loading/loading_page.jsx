import React from 'react';
import SineWave from './sine_wave';

class LoadingPage extends React.Component{
  render(){
    return(
      <div className="loading-page">
        <div className="components">
          <SineWave className="sine-wave" />
          <div>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default LoadingPage;