import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

    getLinks() {
        if (this.props.loggedIn) {
        return (
            <div className>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
        } else {
            return (
                <nav className='links'>
                    <li><Link to={'/signup'}>Signup</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </nav>
            );
        }
    }

    render() {
        return (
            <div className='nav-bar'>
                
                <h1><Link to='/' >Hawkeye</Link></h1>
                <div className='nav-menu'>
                    a
                    { this.getLinks() }
                </div>
            </div>
        );
    }
}

export default NavBar;