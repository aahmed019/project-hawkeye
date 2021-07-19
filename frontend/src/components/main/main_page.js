import React from 'react';
import './main.scss'

class MainPage extends React.Component {

    render() {
        return (
        <div className='splash-container'>
            <div className='splash-header'>
                <h1 className='header'>Project Hawkeye</h1>
                <p className='p'>A Hawk's eye view on Twitter</p>
                <button className='splash-sign-up'>Sign Up</button>
            </div>
            <div className='splash-pic-container'>
                <div className='splash-pic'></div>
            </div>
            <div>
                <div className='splash-bottom-container'>
                    <div className='splash1'></div>
                    <div className='splash2'></div>
                    <div className='splash3'></div>
                </div>
            </div>
            <div>
                <div className='splash-footer'>

                </div>
            </div>
        </div>
        );
    }
}

export default MainPage;