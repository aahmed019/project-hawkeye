import React from 'react'

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(){

    }

    render(){
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
            </div>
        )
    }
}

export default Comments 