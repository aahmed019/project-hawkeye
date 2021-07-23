import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = {
        active: false
    }
  }
  
  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
      
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
        if (window.scrollY < 40) {
           
            this.setState({
                active: false
            })
        } else {
            this.setState({
                active: true
            })
        }
    })
  }

    getLinks() {
        if (this.props.loggedIn) {
        return (
            <div className='logout-link'>
                <button onClick={this.logoutUser} className='logout-btn'>Logout</button>
            </div>
        );
        } else {
            return (
                <div className='links' >
                    
                    <Link to={'/login'} className='middle login'>Login</Link>
                    <Link to={'/signup'} className='signup'><span>Sign Up</span></Link>
                </div>
                    
                
            );
        }
    }

    render() {
        return (
            <div className={this.state.active && !this.props.loggedIn ? 'nav-container hasScrolled' : 'nav-container'}>
                <div className='logo-head-text'>
                <Link to='/' >
                <img src='https://cdn.discordapp.com/attachments/865354697799237634/868159153263235092/hawk_med.png'></img>
                <h1>Project Hawkeye</h1></Link>
                </div>
                <ul className='nav-menu'>
                    
                    { this.getLinks() }

                </ul>
            </div>
        );
    }
}

export default NavBar;