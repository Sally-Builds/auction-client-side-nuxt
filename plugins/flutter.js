import Vue from 'vue'
import flutter from 'flutterwave-vue-v3'

const key = 'FLWPUBK_TEST-05291140f8d12ab9cf622f611a2930d6-X'
// const key = process.env.FLUTTERWAVE_PUBLIC_KEY
Vue.use(flutter, { publicKey: key })
