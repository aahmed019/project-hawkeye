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
    })
};