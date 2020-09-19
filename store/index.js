import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      username: '',
      room: '',
      singleProduct: null,
      auctionProduct: null,
      history: [],
    },
    getters: {
      getHistory(state) {
        return state.history
      },
      getProducts(state) {
        const x = []
        state.products.forEach((e) => {
          const overview = {
            name: e.name,
            productCover: e.productCover,
            start: e.startTime,
            end: e.endTime,
            id: e.id,
            slug: e.slug,
            ongoing: e.ongoing,
            startingBid: e.startingBid,
          }
          x.push(overview)
        })
        return x
      },
      getSingleProduct(state) {
        return state.singleProduct
      },
      getAuctionProduct(state) {
        return state.auctionProduct
      },
    },
    mutations: {
      addTime(state, payload) {
        const product = state.products.find((e) => e.id === payload.id)
        product.endTime = payload.newTime
        // product.endTime = new Date(product.endTime)
        // product.endTime.setSeconds(product.endTime.getSeconds() + 30)
      },
      setProducts(state, payload) {
        state.products = payload
      },
      setSingleProduct(state, payload) {
        const product = state.products.find((e) => e.slug === payload)
        state.singleProduct = product
      },
      setAuctionProduct(state, payload) {
        const product = state.products.find((e) => e.slug === payload)
        state.auctionProduct = product
      },
      changeStatus(state, payload) {
        const index = state.products.findIndex((e) => e.id === payload)
        if (index !== -1) {
          state.products[index].ongoing = true
          console.log(state.products[index])
        }
      },
      history(state, payload) {
        payload.forEach((e) => {
          let color = 'green'
          if (e.name === 'withdrawal') color = 'red'
          state.history.push({
            type: e.name,
            amount: e.amount,
            time: e.time,
            color,
          })
        })
        console.log(state.history)
      },
    },
    actions: {
      async nuxtServerInit({ commit }) {
        try {
          const result = await axios.get(
            'http://localhost:4000/api/v1/products'
          )
          commit('setProducts', result.data.data.products)
        } catch (e) {
          console.log(e)
        }
      },
      singleProduct({ commit }, payload) {
        if (payload.name === 'product') {
          commit('setSingleProduct', payload.slug)
        }
        if (payload.name === 'auction') {
          commit('setAuctionProduct', payload.slug)
        }
      },
      async changeStatus({ commit }, payload) {
        try {
          const formData = {
            ongoing: true,
          }

          await axios.patch(
            'http://localhost:4000/api/v1/products/' + payload,
            {
              data: formData,
            }
          )
          commit('changeStatus', payload)
        } catch (e) {
          console.log(e.response.data)
        }
      },
      async addTime({ commit }, payload) {
        try {
          const formData = {
            endTime: payload.newTime,
          }
          await axios.patch(
            'http://localhost:4000/api/v1/products/' + payload.id,
            {
              data: formData,
            }
          )
          commit('addTime', payload)
        } catch (e) {
          console.log(e)
        }
      },
      async history({ commit }) {
        const res = await this.$axios.get('http://localhost:4000/api/v1/funds')
        const transactions = res.data.data.fund[0].transactions
        commit('history', transactions)
      },
    },
  })
}

export default createStore
