import React from 'react';
import './main.scss'
import { Link } from 'react-router-dom'
class MainPage extends React.Component {
    componentDidMount() {
        document.body.classList.remove('hide-scroll');
    }
    render() {
        return (
        <div className='splash-container'>
            <div className='splash-box'>
                <div className='splash-header'>
                    <h1 className='header'>Project Hawkeye</h1>
                    {/* <p className='p'>A bird's eye view on Twitter</p> */}
                    <Link to='/signup' ><button className='splash-sign-up'>Sign Up</button></Link>
                </div>
                <div className='pic-box'>
                    <div className='splash-pic-container'>
                        {/* <HawkLogo /> */}
                        <div className='splash-pic'>
                             <img className='left-logo' src='/images/hawk_med.png'></img>
                            <img className='base-logo' src='/images/hawk_med.png'></img>

                        </div>
                        <div className='right-text'>
                            <p>Oversight at your fingertips</p>
                        </div>
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
                                Results can be saved into workspaces. 
                                Workspaces are customized by you.
                                </h1>
                            </div>
                        </div>
                        <div className='splash3'>
                            <div className='bottom-container-word3'>
                                <p><span>Easy</span> way to access saved documents</p>
                            <br/>
                            <h1>
                                Every workspace has customized folders.
                                Every Folder can be access through your dashboard
                            </h1>
                            </div>
                            <div className='bottom-container-pic3'>

                            </div>
                        </div>
                    </div>
                </div>
                <p className='meet-the-team'>Meet the team</p>
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
                                        <a href='https://www.linkedin.com/in/ali-ahmed-697693174/' target="_blank" rel="noreferrer">LinkedIn</a>
                                        <a href='https://github.com/aahmed019' target="_blank" rel="noreferrer">Github</a>
                                        {/* <a href='https://www.linkedin.com/in/ali-ahmed-697693174/' target="_blank" rel="noreferrer">Personal Website</a> */}
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
                                        <a href='https://www.linkedin.com/in/jack-l-338a09141/' target="_blank" rel="noreferrer">LinkedIn</a>
                                        <a href='https://github.com/jacktfliu' target="_blank" rel="noreferrer">Github</a>
                                        {/* <a href='https://www.linkedin.com/in/ali-ahmed-697693174/' target="_blank" rel="noreferrer">Personal Website</a> */}
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
                                        <a href='https://www.linkedin.com/in/isohrob/' target="_blank" rel="noreferrer">LinkedIn</a>
                                        <a href='https://github.com/GT458' target="_blank" rel="noreferrer">Github</a>
                                        {/* <a href='https://www.linkedin.com/in/ali-ahmed-697693174/' target="_blank" rel="noreferrer">Personal Website</a> */}
                                    </div>
                                </div>
                            <div className='names'>
                                <div className='card'>
                                    <div className='profile-pic'>
                                        <img className='vincent-pic' src="https://cdn.discordapp.com/attachments/865354697799237634/867102643117359104/Vincent.png" alt="Vincent" />
                                    </div>
                                </div>
                                    <p>Vincent Ahn</p>
                                    <div className='footer-links'>
                                        <a href='https://www.linkedin.com/in/junminvincentahn/' target="_blank" rel="noreferrer">LinkedIn</a>
                                        <a href='https://github.com/vincentahn' target="_blank" rel="noreferrer">Github</a>
                                        {/* <a href='https://www.linkedin.com/in/ali-ahmed-697693174/' target="_blank" rel="noreferrer">Personal Website</a> */}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default MainPage;