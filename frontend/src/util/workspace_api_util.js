import axios from 'axios';

export const fetchWorkspaces = () => {
    return axios.get('/api/workspaces')
};

export const postWorkspace = (data) =>{
    return axios.post('/api/workspaces', 
        {
            params: { data }
        }
    ).then(res => console.log(res))
}

export const addTweet = () => {
    return axios.post('/api/workspaces/add-tweet')
};

export const removeTweet = () => {
    return axios.delete('/api/workspaces/remove-tweet')
};

export const addComment = (workspace_id, comment) => {
    return axios.post('/api/workspaces/add-comment',
    {
        workspace_id,
        comment
    }
    )
};

export const updateComment = (workspace_id, comment) => {
    return axios.patch('/api/workspaces/update-comment', 
    {
        workspace_id,
        comment
    }
    )
}

export const removeComment = (workspace_id, comment) => {
   
    return axios.delete('/api/workspaces/remove-comment', {
        data:{
                workspace_id,
                comment
            }
    }
    )
};