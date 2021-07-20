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

export const addToWorkspace = () => {
    return axios.post('/api/workspaces/add')
};