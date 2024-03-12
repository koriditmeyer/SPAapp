import axios from "axios"
import {BACK_END_URL} from "../services/config.js"

const config={
    withCredentials: true,
}
let percentComplete
const config2={
    onDownloadProgress: function(progressEvent){
         percentComplete = Math.floor((progressEvent.loaded/progressEvent.total)*100)
    }
}

export const getAPI = async (resource, credentials=true) => {
    let data 
    if (credentials){
        const result = await axios.get(`${BACK_END_URL}/${resource}`,config)
        data =result.data
    } else{
        const result = await axios.get(`${BACK_END_URL}/${resource}`,config2)
        data = {...result.data,percentage:percentComplete}
    }
    return data
}

export const postAPI = async (resource,formData) => {
    const {data} = await axios.post(`${BACK_END_URL}/${resource}`,formData, config)
    return data
}

export const putAPI = async (resource,formData) => {
    const {data} = await axios.put(`${BACK_END_URL}/${resource}`,formData, config)
    return data
}

export const deleteAPI = async (resource) => {
    const {data} = await axios.delete(`${BACK_END_URL}/${resource}`, config)
    return data
}