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
            <div className={this.state.active ? 'nav-container hasScrolled' : 'nav-container'}>
                
                <h1><Link to='/' >Project Hawkeye</Link></h1>
                <ul className='nav-menu'>
                    
                    { this.getLinks() }

                </ul>
            </div>
        );
    }
}

export default NavBar;