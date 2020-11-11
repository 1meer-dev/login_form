import axios from 'axios'

export default axios.create({
    baseURL: 'http://ameer22-001-site1.atempurl.com/api/',
    headers: {
        "Content-type": "application/json"
      }
})