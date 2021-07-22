import React from 'react'
import Comments from '../comments/comments'

class FolderPopUp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    Tweets
                </div>

                <div>
                    <Comments/>
                </div>
            </div>
        )
    }
}

export default FolderPopUp

