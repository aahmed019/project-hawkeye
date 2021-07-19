import React from 'react';
import './main.scss'

class MainPage extends React.Component {

    render() {
        return (
        <div className='splash-container'>

            <div className='under-nav'>
                <section className='section'>
                    <h1 className='splash-words'>PROJECT HAWKEYE</h1>
                </section>
            </div>
            {/* section 1  */}
            <div className='section1'>
                <div className='section1-box1'>
                    <h1 className='section1-box1-header'>Search for Tweets by username</h1>
                    <br/>
                    <br/>
                    <p className='section1-box1-p'>
                      Tweets can be filtered based on an individual's Twitter username. 
                      You can find more relevant tweets using custom or pre-built filters. 
                    </p>
                </div>

                <div className='section1-box2'>
                    JUST A PHOTO FOR NOW MIGHT CHANGE
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
                Box3 PHOTO
                </div>
            </div>
            
        </div>
        );
    }
}

export default MainPage;