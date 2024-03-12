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
    let result 
    if (credentials){
        result = await axios.get(`${BACK_END_URL}/${resource}`,config)
    } else{
        result = await axios.get(`${BACK_END_URL}/${resource}`,config2)
    }
    result = {...result,percentage:percentComplete}
    return result
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