import Vue from 'vue'
import validator from 'validator'
import isEmail from 'validator/lib/isEmail'

Vue.use(validator)
Vue.component('isEmail', isEmail)
