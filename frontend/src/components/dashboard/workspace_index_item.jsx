import React from 'react'

class WorkspaceIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open : false,
            id: this.props.title + `${Math.random(0, 5)}`
          }
        this.toggleDropdownTwo = this.toggleDropdownTwo.bind(this)
    }
        toggleDropdownTwo(e){
        e.preventDefault();
        let button2 =  document.getElementById(this.state.id)
        button2.classList.toggle('active')
        this.setState({open : !this.state.open})
      }

      render(){
        const folderList = folders => folders.map(folder => (
            <div className='content'>
                <div className='Folder'>
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

export default WorkspaceIndexItem