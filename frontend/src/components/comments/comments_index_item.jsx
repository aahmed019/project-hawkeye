import React from 'react'
export default class CommentsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            edit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        let Updatedcomment = Object.assign({}, {comment_id: this.props.idx, comment_body: this.state.text})
        this.props.updateComment(this.props.workspace_id, Updatedcomment)
        this.setState({edit: false})
    }

    render(){
        return(
            <div className='comments-container'>
                {this.state.edit ?
                <form className='edit-cancel-form' onSubmit={this.handleSubmit}>
                    <input className='edit-body' type="text" defaultValue = {this.props.comment.body} 
                    onChange = {this.handleInput('text')}/>
                    <div onClick={this.handleSubmit} className='editComment'>✔</div>
                    <div className='cancelComment'
                    onClick={() => {this.setState({edit: !this.state.edit})}}
                    >&times;</div>
                </form>
                :
                <div>
                    <div className='button-container'>
                        <div className='editComment'
                        onClick={() => {this.setState({edit: !this.state.edit})}}
                        >edit</div>

                        <div className='deleteComment'
                        onClick={() => {this.props.removeComment(this.props.workspace_id, this.props.comment.body, this.props.idx)}}
                        >&times;</div>
                    </div>
                    <div className='comment-body'>
                        {this.props.comment.body}
                    </div>
                </div>
            }
            </div>
        )
    }

}