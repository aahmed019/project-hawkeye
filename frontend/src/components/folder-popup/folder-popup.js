import { defaultMinSockets } from 'forever-agent'
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
                    <div>
                        Tweets
                    </div>
                </div>

                <div>
                    <Comments/>
                </div>
            </div>
        )
    }
}

export default FolderPopUp


{/* <button class="toggle-button" id="centered-toggle-button">Folder</button>

<div class="modal" id="modal">
  <h2>Modal Window</h2>
  <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
  <div class="actions">
    <button class="toggle-button">OK</button>
  </div>
</div> */}