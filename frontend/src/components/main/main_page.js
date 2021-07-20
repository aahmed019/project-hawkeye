import React from 'react';
import './main.scss'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

    render() {
        return (
        <div className='splash-container'>
            <div className='splash-box'>
                <div className='splash-header'>
                    <h1 className='header'>Project Hawkeye</h1>
                    <p className='p'>A bird's eye view on Twitter</p>
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
                            <p><span>Search</span> for Tweets by username</p>
                            <br/>
                            <h1>
                            Tweets can be filtered based on an individual's Twitter username. 
                            You can find more relevant tweets using custom or pre-built filters. 
                            </h1>
                        </div>
                        <div className='bottom-container-pic'>

                        </div>
                    </div>
                    <div className='splash2'>
                        <div className='bottom-container-pic2'>

                        </div>
                        <div className='bottom-container-word2'>
                            <p><span>Simple</span> way to save searches</p>
                            <br/>
                            <h1>
                            Results can be saved into workspaces. Workspaces can be public or private.
                            </h1>
                        </div>
                    </div>
                    <div className='splash3'>
                        <div className='bottom-container-word3'>
                            <p><span>Easy</span> way to share results</p>
                        <br/>
                        <h1>
                            Public and Private workspaces can be shared with others.
                            Private workspaces will need a key to access it. 
                        </h1>
                        </div>
                        <div className='bottom-container-pic3'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='splash-footer-box'>
                <div className='splash-footer'>
                    
                        <div className='names'>
                            <div className='card'>
                                <div className='profile-pic'>
                                    <img className='ali-pic' src="https://cdn.discordapp.com/attachments/865354697799237634/867099352623218688/Ali.png" alt="ali ahmed" />
                                </div>
                            </div>
                                <p>Ali Ahmed</p>
                                <div className='footer-links'>
                                    <Link>LinkedIn</Link>
                                    <Link>Github</Link>
                                    <Link>Personal Website</Link>
                                </div>
                            </div>   
                        <div className='names'>
                            <div className='card'>
                                <div className='profile-pic'>
                                    <img className='jack-pic' src="https://cdn.discordapp.com/attachments/865354697799237634/867099349540274186/Jack.png" alt="jack liu" />
                                </div>
                            </div>
                                <p>Jack Liu</p>
                                <div className='footer-links'>
                                    <Link>LinkedIn</Link>
                                    <Link>Github</Link>
                                    <Link>Personal Website</Link>
                                </div>
                            </div>   
                        <div className='names'>
                            <div className='card'>
                                <div className='profile-pic'>
                                    <img className='sohrob-pic' src="https://cdn.discordapp.com/attachments/865354697799237634/867099349867954236/Screen_Shot_2021-07-20_at_1.05.17_PM-removebg-preview.png" alt="sohrob" />
                                </div>
                            </div>
                                <p>Sohrob Ibrahimi</p>
                                <div className='footer-links'>
                                    <Link>LinkedIn</Link>
                                    <Link>Github</Link>
                                    <Link>Personal Website</Link>
                                </div>
                            </div>
                        <div className='names'>
                            <div className='card'>
                                <div className='profile-pic'>
                                    <img className='vincent-pic' src="https://cdn.discordapp.com/attachments/865354697799237634/867102643117359104/Vincent.png" alt="Vincent" />
                                </div>
                            </div>
                                <p>Vincent Anh</p>
                                <div className='footer-links'>
                                    <Link>LinkedIn</Link>
                                    <Link>Github</Link>
                                    <Link>Personal Website</Link>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default MainPage;