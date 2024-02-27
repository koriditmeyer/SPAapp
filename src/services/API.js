import axios from "axios"
import {BACK_END_URL} from "../services/config.js"

const config={
    withCredentials: true,
}

export const getAPI = async (resource, credentials=true) => {
    let result 
    if (credentials){
        result = await axios.get(`${BACK_END_URL}/${resource}`,config)
    } else{
        result = await axios.get(`${BACK_END_URL}/${resource}`)
    }
    return result.data
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