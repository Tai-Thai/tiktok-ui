import axios from 'axios'

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (path, options = {}) => {
    const response = await request.get(path, options)

    if (response && response.data) return response.data

    return response
}

export default request
