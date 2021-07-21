import React from 'react';

class WorkspaceIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      workspaceTitle: '',
      folderName: ''
    }

    this.handleCreateWorkspace = this.handleCreateWorkspace.bind(this);
    this.handleDeleteWorkspace = this.handleDeleteWorkspace.bind(this);
  }

  componentDidMount(){
    this.props.fetch();
  }

  handleCreateWorkspace(e){
    e.preventDefault();
    this.props.createWorkspace(this.state.workspaceTitle);
  }

  handleCreateFolder(workspaceId){
    return e => {
      e.preventDefault();
      this.props.createFolder(workspaceId, this.state.folderName);
    }
  }

  handleDeleteWorkspace(workspaceId){
    return e => {
      e.preventDefault();
      this.props.deleteWorkspace(workspaceId);
    }
  }
  
  handleDeleteFolder(workspaceId, name, idx){
    return e => {
      e.preventDefault();
      this.props.deleteFolder(workspaceId, name, idx);
    }
  }

  update(field){
    return e => this.setState({ [field]: e.target.value })
  }

  render(){
    const folderList = (folders, workspaceId) => (folders.length === 0 ? null : 
      folders.map((folder, idx) => (
        <li>
          <div>{folder.name}</div>
          <div><button onClick={this.handleDeleteFolder(workspaceId, folder.name, idx)}>Delete {folder.name}</button></div>
        </li>
      )))

    const workspaceList = this.props.workspaces.length === 0 ? null : 
      this.props.workspaces.map(workspace => (
        <li>
          <ul>
            <li>
              {workspace.title}
            </li>
            <li>
              <h1>Create Folder</h1>
              <form onSubmit={this.handleCreateFolder(workspace._id)}>
                <input 
                  type="text"
                  value={this.state.folderName}
                  onChange={this.update('folderName')} />
              </form>
            </li>
            <li>
              <ul>
                {folderList(workspace.folders, workspace._id)}
              </ul>
            </li>
            <li>
              <button onClick={this.handleDeleteWorkspace(workspace._id)}>
                Delete {workspace.title}
              </button>
            </li>
          </ul>
        </li>
      ));

    return(
      <div>
        <div>
          <div>
            <h1>Create Workspace</h1>
            <form onSubmit={this.handleCreateWorkspace}>
              <input 
                type="text"
                value={this.state.workspace}
                onChange={this.update('workspaceTitle')} />
            </form>
          </div>
          <ul>
            {workspaceList}
          </ul>
        </div>
      </div>
    );
  }
};

export default WorkspaceIndex;