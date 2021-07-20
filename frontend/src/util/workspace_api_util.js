import axios from 'axios';

export const fetchWorkspaces = () => {
    return axios.get('/api/workspaces')
};

export const postWorkspace = () =>{
    return axios.post('/api/workspaces')
}