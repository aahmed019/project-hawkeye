import React from 'react'
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';

const mSTP = state => ({
  modal: state.entities.modal,
  currentUser: state.session.user
});

const mDTP = dispatch => ({
  openModal: (modalType, id, folder) => dispatch(openModal(modalType, id, folder)),
  closeModal: () => dispatch(closeModal()),
});


class WorkspaceIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open : false,
            id: this.props.title + `${Math.random(0, 5)}`
        }
        this.toggleDropdownTwo = this.toggleDropdownTwo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        
    toggleDropdownTwo(e){
        e.preventDefault();
        let button2 =  document.getElementById(this.state.id)
        button2.classList.toggle('active')
        this.setState({open : !this.state.open})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.closeModal();
    }


    render(){
    const folderList = folders => folders.map(folder => (
        <div className='content'>
            <div className='Folder' onClick={() => (this.props.openModal('open_folder', this.props.id, folder))}>
                {folder.name}
            </div>
        </div>
    ));

    return (
            <div>
                <button id = {this.state.id} className='created-Folders' onClick={(e)=> this.toggleDropdownTwo(e)}>{this.props.title}</button>
                {this.state.open ? folderList(this.props.folders) : ''} 
            </div>
        )
    }
    
    

}

export default connect(mSTP, mDTP)(WorkspaceIndexItem);