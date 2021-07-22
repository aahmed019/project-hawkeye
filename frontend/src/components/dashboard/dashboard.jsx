import React from 'react';
class DashBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openCreateDropDown : false,
      openWorkspaceDropDown : false,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleDropdownTwo = this.toggleDropdownTwo.bind(this)
  }

  componentDidMount(){
    this.props.fetch();
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
    const folderList = folders => folders.map(folder => (
      <div>
          {this.state.openWorkspaceDropDown ? (
          <div className='content'><div className='Folder'>{folder.name}</div></div>) 
          : ''}
      </div>
    ));

    const workspaceList = this.props.workspaces.map(workspace => (
      <div>
        {this.state.openCreateDropDown ? (
          <div className='content'>
            <button className='created-Folders' onClick={(e)=>this.toggleDropdownTwo(e)} >{workspace.title}</button>
            {folderList(workspace.folders)}
          </div>
        ) 
        : ''}
      </div>
    ));


    return (
        <div className='main-index-sidebar'>
          <div className='workspace-header'>Dashboard</div>
          <div className='dropdown-sidebar'>
            <button onClick={(e)=>this.toggleDropdown(e)} 
              className='created-workspaces'>CREATED BY YOU</button>
            {workspaceList}
          </div>
          <div className='create-container'>
            <button onClick={e => this.props.openModal('create_workspace')}className='create-workspace'>Create a Workspace</button>
          </div>
        </div>
    )
  }
}

export default DashBoard;