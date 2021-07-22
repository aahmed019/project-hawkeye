import React from 'react';
import WorkspaceIndexItemContainer from './workspace_index_item_container';

class DashBoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      openCreateDropDown : false,
      openWorkspaceDropDown : false,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
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

  render() {

    const workspaceList = this.props.workspaces.map(workspace => (
        <div>
            { this.state.openCreateDropDown ? (
              <div className='content'>
                <WorkspaceIndexItemContainer title = {workspace.title} id={workspace._id} folders = {workspace.folders}/>
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