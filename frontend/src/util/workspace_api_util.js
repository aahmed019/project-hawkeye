import axios from 'axios';

export const fetchWorkspaces = () => {
    return axios.get('/api/workspaces');
};

export const postWorkspace = title => {
    return axios.post('/api/workspaces', 
        {
            params: { 
                title
            }
        }
    );
}

export const deleteWorkspace = id => {
    return axios.delete('/api/workspaces', {
        data: {
            id
        }
    });
}

export const postFolder = (workspaceId, name) => {
    return axios.post('/api/workspaces/addfolder',
        {
            params: {
                workspaceId,
                name
            }
        }
    );
};

export const deleteFolder = (workspaceId, name) => {
    return axios.delete('/api/workspaces/deletefolder', {
            data: {
                workspaceId,
                name
            }
    });
};

export const addTweet = (workspaceId, folder, tweet) => {
    return axios.post('/api/workspaces/add-tweet',
        {
            params: {
                workspaceId,
                folder,
                tweet
            }
        }
    )
};

export const removeTweet = (workspaceId, folder_idx, tweet_source) => {
  return axios.delete('/api/workspaces/remove-tweet', {
    data:{
            workspaceId,
            folder_idx,
            tweet_source
        }
  })
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