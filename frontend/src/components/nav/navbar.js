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
        if (window.scrollY < 100) {
           
            this.setState({
                active: false
            })
        } else {
            //  debugger;
            this.setState({
                active: true
            })
        }
    })
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
                <div className='links' >
                    <Link to={'/signup'}>Sign Up</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
                    
                
            );
        }
    }

    render() {
        return (
            <div className={this.state.active ? 'nav-container hasScrolled' : 'nav-container'}>
                
                <h1><Link to='/' >Hawkeye</Link></h1>
                <ul className='nav-menu'>
                    
                    { this.getLinks() }
                </ul>
            </div>
        );
    }
}

export default NavBar;