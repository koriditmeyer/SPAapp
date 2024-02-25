import axios from "axios"
import {BACK_END_URL} from "../services/config.js"

const config={
    withCredentials: true,
}

export const getAPI = async (resource) => {
    const {data} = await axios.get(`${BACK_END_URL}/${resource}`)
    return data
}

export const postAPI = async (resource,formData) => {
    const {data} = await axios.post(`${BACK_END_URL}/${resource}`,formData, config)
    return data
}

export const deleteAPI = async (resource) => {
    const {data} = await axios.delete(`${BACK_END_URL}/${resource}`, config)
    return data
}