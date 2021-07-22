import React from 'react'
export default class CommentsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            edit: false
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    render(){
        return(
            <div>
                {this.state.edit ?
                <form action="">
                    <input type="text" defaultValue = {this.props.comment.body} />
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