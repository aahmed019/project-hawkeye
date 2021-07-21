import React from 'react';

class DashBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open : false 
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown(e){
    e.preventDefault();
    this.setState({open: !this.state.open})
  }



  render() {
    return (
        <div className='main-index-sidebar'>
          <div className='workspace-header'>Dashboard</div>
          <div className='dropdown-sidebar'>
            <button className='created-workspaces'>CREATED BY YOU</button>

          </div>
          <div className='create-container'>
            <button onClick={this.toggleDropdown} className='create-workspace'>Create a Workspace</button>
            <p className='content'>Hi</p>
          </div>
        </div>
    )
  }
}

export default DashBoard;