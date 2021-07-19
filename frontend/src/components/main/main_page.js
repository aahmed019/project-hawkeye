import React from 'react';
import './main.scss'

class MainPage extends React.Component {

    render() {
        return (
        <div className='splash-container'>

            <div className='under-nav'>
                <div className='splash-words'>
                    <h1 className='nav-header'>HEADER</h1>
                    <h2 className='nav-paragraph'>PARAGRAPH</h2>
                </div>
            </div>
            {/* section 1  */}
            <div className='section1'>
                <div className='section1-box1'>
                    WORDS PARAGRAPH
                </div>

                <div className='section1-box2'>
                Box2 PHOTO
                </div>
            </div>

            {/* section 2 */}
            <div className='section2'>
                <div className='section2-box1'>
                Box2 PHOTO
                </div>

                <div className='section2-box2'>
                    WORDS PARAGRAPH
                </div>
            </div>

            {/* section 3 */}
            <div className='section3'>
                <div className='section3-box1'>
                    WORDS PARAGRAPH
                </div>

                <div className='section3-box2'>
                Box2 PHOTO
                </div>
            </div>
            
        </div>
        );
    }
}

export default MainPage;