import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/passengers?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return apiClient.get('/passengers/' + id)
  }
}
