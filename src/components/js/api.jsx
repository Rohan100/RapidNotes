import axios from 'axios';

const BASE_URL = 'http://localhost:3000'

const api = axios.create({
    baseURL : BASE_URL,
})

export const uploadFile = async (formData) => {
    try {
        const response = await api.post('/file/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response.data;
      } catch (error) {
        throw error;
      }
}

export const getSubject = async (branch) => {
    try{
        const response = await api.get(`subjects/${branch}`)
        return response.data;
    }catch(error){
        throw error
    }
}

export const getBranches  = async () =>{
    try{
        const response = await api.get(`/branches`)
        return response.data;
    }catch(error){
        throw error
    }
}

export const getFiles = async () => {
    try{
        const response = await api.get('/file');
        return response.data;
    }catch(error){
        throw error
    }
}

export const getFilesFromId = async (id) => {
    try{
        const response = await api.get('/file/' + id);
        return response.data;
    }catch(error){
        throw error
    }
}
