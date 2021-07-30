import React from 'react'
import { connect } from 'react-redux';
import { addCommentToWorkspace, removeCommentInWorkspace, updateCommentInWorkspace } from '../../actions/workspace_actions';
import CommentsIndexItem from './comments_index_item';

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            edit: false
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
            return <div className='comment-body-container' key = {i}>
                <CommentsIndexItem comment ={comment} idx = {i} workspace_id={this.props.workspace_id} 
                removeComment = {this.props.removeComment}
                updateComment = {this.props.updateComment}
                />
            </div>
        })

        return (
            <div className='comment-container'>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea type="text" className="commentInput"
                        value ={this.state.text}
                        placeholder="type out your comment here..."
                        onChange = {this.handleInput('text')}
                        maxLength="250"
                        />
                        <br/>
                        <button className='add-comment'>Comment</button>
                    </div>
                </form>
                <div className='all-comments'>
                    {comments}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({entities}, ownProps) => {
    return {
        comments: entities.workspaces[ownProps.workspace_id].comments,
    }
  }

const mapDispatchToProps = dispatch => {
    
  return {
    addComment: (workspace_id, comment) => dispatch(addCommentToWorkspace(workspace_id, comment)),
    updateComment: (workspace_id, comment) =>  dispatch(updateCommentInWorkspace(workspace_id, comment)),
    removeComment: (workspace_id, comment, idx) =>  dispatch(removeCommentInWorkspace(workspace_id, comment, idx))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);

