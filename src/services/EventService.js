import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/ErikPiet/real-estate-care',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPage(subURL){
        return apiClient.get(subURL)
    }
}