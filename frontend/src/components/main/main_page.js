import React from 'react';
import './main.scss'

class MainPage extends React.Component {

    render() {
        return (
        <div className='splash-container'>
            <div className='splash-box'>
                <div className='splash-header'>
                    <h1 className='header'>Project Hawkeye</h1>
                    <p className='p'>A Hawk's eye view on Twitter</p>
                    <button className='splash-sign-up'>Sign Up</button>
                </div>
            </div>
            <div className='pic-box'>
                <div className='splash-pic-container'>
                    <div className='splash-pic'></div>
                </div>
            </div>
            <div className='splash-bottom-box'>
                <div className='splash-bottom-container'>
                    <div className='splash1'>
                        <div className='bottom-container-word'>

                        </div>
                        <div className='bottom-container-pic'>

                        </div>
                    </div>
                    <div className='splash2'>
                        <div className='bottom-container-pic2'>

                        </div>
                        <div className='bottom-container-word2'>

                        </div>
                    </div>
                    <div className='splash3'>
                        <div className='bottom-container-word3'>

                        </div>
                        <div className='bottom-container-pic3'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='splash-footer-box'>
                <div className='splash-footer'>

                </div>
            </div>
        </div>
        );
    }
}

export default MainPage;