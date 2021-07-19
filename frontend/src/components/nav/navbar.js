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
                <li className='dropdown'>
                    <img src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"/>
                    <ul className='dropdown-menu'>
                        <li className='menu-item'><Link to={'/signup'}>Sign Up</Link></li>
                        <li className='menu-item'><Link to={'/login'}>Login</Link></li>

                    </ul>
                </li>
            );
        }
    }

    render() {
        return (
            <div className='nav-container'>
                
                <h1><Link to='/' >Hawkeye</Link></h1>
                <ul className='nav-menu'>
                    
                    { this.getLinks() }
                </ul>
            </div>
        );
    }
}

export default NavBar;