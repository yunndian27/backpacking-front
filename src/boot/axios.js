// import Vue from 'vue'
import axios from 'axios'

export default ({ Vue, router, store }) => {
  Vue.prototype.$axios = axios.create({ baseURL: process.env.VUE_APP_API })
}

// Vue.prototype.$axios = axios
