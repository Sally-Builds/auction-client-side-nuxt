import Vue from 'vue'
import Flutterwave from 'vue-flutterwave'

// Vue.use(Flutterwave, { publicKey: 'YOUR CONNECT PUBLIC KEY' })
const key = 'FLWPUBK_TEST-05291140f8d12ab9cf622f611a2930d6-X'
Vue.use(Flutterwave, { publicKey: key })
