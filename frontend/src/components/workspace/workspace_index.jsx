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

  update(field){
    return e => this.setState({ [field]: e.target.value })
  }

  render(){
    const folderList = folders => (folders.length === 0 ? null : 
      folders.map(folder => (
        <li>{folder.name}</li>
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
                {folderList(workspace.folders)}
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