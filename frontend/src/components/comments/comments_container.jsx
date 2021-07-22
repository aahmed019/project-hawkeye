import React from 'react'
import { connect } from 'react-redux';
import { addCommentToWorkspace, removeCommentInWorkspace, updateCommentInWorkspace } from '../../actions/workspace_actions';

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.addComment(this.props.workspace_id, this.state.text)
        this.setState({text:''})
    }

    render(){
        if(!this.props.comments) return null

        const comments = this.props.comments.map((comment, i) => {
            return(
                <div key = {i}>
                    {comment.body}
                    <button 
                    onClick={() => this.props.removeComment(this.props.workspace_id, comment.body, i)}
                    >delete</button>
                </div>
            )
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea type="text" className="commentInput"
                        value ={this.state.text}
                        placeholder="type out your comment here..."
                        onChange = {this.handleInput('text')}
                        />

                        <br />
                        <br />
                        <button>Add comment</button>
                    </div>
                </form>
                {comments}
            </div>
        )
    }
}

const mapStateToProps = ({entities}, ownProps) => {
    debugger
    return {
        comments: entities.workspaces[ownProps.workspace_id].comments,
    }
  }

const mapDispatchToProps = dispatch => {
    
  return {
    addComment: (workspace_id, comment) => dispatch(addCommentToWorkspace(workspace_id, comment)),
    updateComment: (workspace_id, comment) =>  dispatch(updateCommentInWorkspace(workspace_id, comment)),
    removeComment: (workspace_id, comment) =>  dispatch(removeCommentInWorkspace(workspace_id, comment))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);

