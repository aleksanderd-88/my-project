import axios, { AxiosResponse } from 'axios'
import store from '@/store'

const options = {
  baseURL: 'https://www.eporner.com/api/v2',
  withCredentials: false
}

const client = axios.create(options)

client.interceptors.request.use(req => {
  store.dispatch('setLoading', true)
  return req
})

client.interceptors.response.use(res => {
  store.dispatch('setLoading', false)
  return res
})

export default {
  fetchVideos(query: string, page = 1, perPage = 100): Promise<AxiosResponse> {
    return client.get(`/video/search/?query=${query}&page=${page}&per_page=${perPage}`)
  }
}