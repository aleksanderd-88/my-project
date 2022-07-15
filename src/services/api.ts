import axios, { AxiosResponse } from 'axios'

const options = {
  baseURL: 'https://www.eporner.com/api/v2',
  withCredentials: false
}

const client = axios.create(options)

export default {
  fetchVideos(query = 'blowjob', page = 1): Promise<AxiosResponse> {
    return client.get(`/video/search/?query=${query}&page=${page}`)
  }
}