import React from 'react';

class DashBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openCreateDropDown : false ,
      openWorkspaceDropDown : false
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleDropdownTwo = this.toggleDropdownTwo.bind(this)
  }

  toggleDropdown(e){
    e.preventDefault();
    let button =  document.querySelector(".created-workspaces")
    button.classList.toggle('active')
    this.setState({openCreateDropDown: !this.state.openCreateDropDown});
    
  }

  toggleDropdownTwo(e){
    e.preventDefault();
    let button2 =  document.querySelector(".created-Folders")
    button2.classList.toggle('active')
    this.setState({openWorkspaceDropDown : !this.state.openWorkspaceDropDown})
  }



  render() {

    return (
        <div className='main-index-sidebar'>
          <div className='workspace-header'>Dashboard</div>
          <div className='dropdown-sidebar'>
            <button onClick={(e)=>this.toggleDropdown(e)} className='created-workspaces'>CREATED BY YOU</button>
            <div>
                {this.state.openCreateDropDown ? (<div className='content'>
                    <button className='created-Folders' onClick={(e)=>this.toggleDropdownTwo(e)} >WORKSPACE</button>
                        <div>
                            {this.state.openWorkspaceDropDown ? (
                            <div className='content'><div className='Folder'>CREATEFOLDER</div></div>) 
                            : ''}
                        </div>
                </div>) 
                : ''}
            </div>
          </div>
          <div className='create-container'>
            <button className='create-workspace'>Create a Workspace</button>
          </div>
        </div>
    )
  }
}

export default DashBoard;