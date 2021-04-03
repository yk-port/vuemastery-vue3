import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/yk-port/vuemastery-vue3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'app'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  }
}
