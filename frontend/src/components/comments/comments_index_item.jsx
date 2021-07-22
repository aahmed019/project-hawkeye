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
            <div>
                {this.state.edit ?
                <form onSubmit={this.handleSubmit}>
                    <input type="text" defaultValue = {this.props.comment.body} 
                    onChange = {this.handleInput('text')}/>
                    <button 
                    onClick={() => {this.setState({edit: !this.state.edit})}}
                    >exit</button>
                    <button>Submit</button>
                </form>
                : 
                <div >
                    {this.props.comment.body}
                    <button 
                    onClick={() => {this.props.removeComment(this.props.workspace_id, this.props.comment.body, this.props.idx)}}
                    >delete</button>

                    <button 
                    onClick={() => {this.setState({edit: !this.state.edit})}}
                    >update</button>
                </div>
            }
            </div>
        )
    }

}