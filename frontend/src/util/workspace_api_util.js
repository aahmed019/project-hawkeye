import axios from 'axios';

export const fetchWorkspaces = () => {
    return axios.get('/api/workspaces')
        .then(res => console.log(res.data));
};

export const postWorkspace = (data) =>{
    return axios.post('/api/workspaces', 
        {
            params: { 
                title: "Workspace 1"
            }
        }
    ).then(res => console.log(res.data));
}

export const addToWorkspace = () => {
    return axios.post('/api/workspaces/add')
};

export const removeFromWorkspace = () => {
    return axios.delete('/api/workspaces/remove')
};