import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class WorkspaceIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        open : false,
        id: this.props.title + `${Math.random(0, 5)}`,
        newFolderName: ''
    }
    this.handleWorkspaceClick = this.handleWorkspaceClick.bind(this);
    this.createNewFolder = this.createNewFolder.bind(this);
    this.updateNewFolderName = this.updateNewFolderName.bind(this);
  }
      
  handleWorkspaceClick(e){
    e.preventDefault();
    let button2 =  document.getElementById(this.state.id);
    button2.classList.toggle('active');
    this.setState({open : !this.state.open});
  }

  handleAddToFolder(workspaceId, folderName, idx){
    return e => {
      if(this.props.dragging && this.props.tweet){
        let folder = {
          name: folderName,
          idx
        }

        this.props.addTweetToFolder(workspaceId, folder, this.props.tweet);
      }
    }
  }

  handleFolderClick(workspaceId, folder, idx){
    return e => {
      if(this.props.dragging && this.props.tweet){
        let folderData = {
          name: folder.name,
          idx
        }

        this.props.addTweetToFolder(workspaceId, folderData, this.props.tweet)
      }else{
        folder['idx'] = idx;
        console.log(folder);

        this.props.openModal('open_folder', workspaceId, folder);
      };
    };
  }

  createNewFolder(e){
    e.preventDefault();
    this.props.createFolder(this.props.id, this.state.newFolderName);
    this.setState({ newFolderName: '' });
  }

  updateNewFolderName(e){
    this.setState({ newFolderName: e.target.value });
  }

  render(){
    const folderList = folders => folders ? folders.map((folder, idx) => (
      <div className='content folder-row' key={`workspace-${this.props.id}-folder-${idx}`}>
        <div 
          className='Folder' 
          onClick={this.handleFolderClick(this.props.id, folder, idx)}>
            {folder.name}
        </div>
        <div className="trash-can">
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              onClick={() => this.props.deleteFolder(this.props.id, folder.name, idx)}/>
          </div>
      </div>
    )) : null;

    return (
      <div key={`workspace-${this.props.id}`}>
        <div className="workspace-row">
          <button 
            id = {this.state.id} 
            className='created-Folders' 
            onClick={this.handleWorkspaceClick}>

            {this.props.title}
          </button>
          <div className="trash-can">
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              onClick={() => this.props.deleteWorkspace(this.props.id)}/>
          </div>
        </div>

        {this.state.open ? (
          <>
            {folderList(this.props.folders)}
            <div>
              <form 
                onSubmit={this.createNewFolder}
                className="new-folder-form">
                <input 
                  className="new-folder-input"
                  type="text"
                  placeholder="New Folder" 
                  onChange={this.updateNewFolderName}
                  value={this.state.newFolderName}/>
              </form>
            </div>
          </>
        ) : ''} 

        
      </div>
    )
  }
};

export default WorkspaceIndexItem;

