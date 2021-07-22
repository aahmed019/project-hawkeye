import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class WorkspaceIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        open : false,
        id: this.props.title + `${Math.random(0, 5)}`,
        activeIndex: []
    }
    this.handleWorkspaceClick = this.handleWorkspaceClick.bind(this);
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
        this.props.openModal('open_folder', workspaceId, folder);
      };
    };
  }

  render(){
    const folderList = folders => folders.map((folder, idx) => (
      <div className='content'>
        <div 
          className='Folder' 
          onClick={this.handleFolderClick(this.props.id, folder, idx)}>
            {folder.name}
        </div>
      </div>
    ));

    return (
      <div>
        <div className="workspace-row">
          <button 
            id = {this.state.id} 
            className='created-Folders' 
            onClick={this.handleWorkspaceClick}>

            {this.props.title}
          </button>
          <div className="trash-can">
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>

        {this.state.open ? folderList(this.props.folders) : ''} 
      </div>
    )
  }
};

export default WorkspaceIndexItem;

