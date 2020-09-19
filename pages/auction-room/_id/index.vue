<template>
  <div>
    <v-container v-if="product" class="pt-8">
      <div v-if="startnow == true">
        <v-row>
          <v-col cols="12" class="text-center">
            <h5 class="text-h3 text--secondary">
              Welcome to the Bidding arena
            </h5>
          </v-col>
        </v-row>
        <v-row height="550">
          <v-col cols="7" md="3">
            <v-navigation-drawer permanent width="200">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Auctioneers
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    online ({{ noOfUsers }})
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <perfect-scrollbar>
                <v-list dense>
                  <v-list-item v-for="(user, i) in users" :key="i">
                    <v-list-item-avatar>
                      <v-img
                        :src="`http://127.0.0.1:4000/images/users/${user.photo}`"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>
                        {{ user.username }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </perfect-scrollbar>
            </v-navigation-drawer>
          </v-col>

          <v-col cols="12" md="6">
            <div class="text-center">
              <h5>Bids</h5>
            </div>
            <v-divider></v-divider>
            <perfect-scrollbar
              v-chat-scroll="{ always: true, smooth: true }"
              class="scroll"
            >
              <v-list v-for="(msgs, i) in userMessages" :key="i">
                <v-sheet>
                  <span class="text-caption">
                    <v-avatar>
                      <v-img
                        :src="`http://127.0.0.1:4000/images/users/${msgs.photo}`"
                      ></v-img>
                    </v-avatar>
                    {{ msgs.username }}
                    <span class="text-body-2">{{ msgs.time }}</span> </span
                  ><br />
                  <v-chip class="mt-2"> {{ msgs.text }} </v-chip>
                  <v-divider></v-divider>
                </v-sheet>
              </v-list>
            </perfect-scrollbar>
            <div>
              <v-row>
                <v-form
                  v-if="status == false"
                  v-model="isFormValid"
                  @submit.prevent=""
                >
                  <v-col cols="8">
                    <v-text-field
                      v-model.number="msg"
                      type="number"
                      :rules="rules"
                      placeholder="place a bid"
                      prefix="$"
                      dense
                      @keyup.enter="$event.target.blur()"
                    ></v-text-field>
                  </v-col>
                  <v-col class="ml-n4" cols="2">
                    <v-btn
                      color="primary"
                      light
                      class="black--text"
                      outlined
                      :disabled="!isFormValid"
                      @click="send"
                      >Place Bid</v-btn
                    >
                  </v-col>
                </v-form>
              </v-row>
            </div>
          </v-col>
          <!-- details -->
          <v-col cols="6" md="3">
            <div>
              <h4 class="text-caption">
                Starting Bid:
                <span class="text-overline purple--text"
                  >${{ product.startingBid }}.00</span
                >
              </h4>
              <h4 class="text-caption">
                MBI:
                <span class="text-overline purple--text">
                  ${{ product.minBidInc }}00</span
                >
              </h4>
            </div>
            <v-divider></v-divider>
            <div v-if="lastBid.username">
              <h4 class="text-caption">Winning bid</h4>
              <div>
                <span class="text-body-2"> Name: {{ lastBid.username }} </span>
                <v-avatar>
                  <v-img
                    :src="`http://127.0.0.1:4000/images/users/${lastBid.photo}`"
                  ></v-img>
                </v-avatar>
              </div>
              <h4 class="text-caption">
                Bid:
                <span class="text-overline purple--text">
                  ${{ lastBid.msg }}.00</span
                >
              </h4>
            </div>
            <div v-else>
              <h4 class="text-caption">No bidder Yet</h4>
            </div>
            <v-divider></v-divider>
            <div class="mt-4">
              <h6>Time Remaining</h6>
              <div>
                <Counter
                  :end="{
                    year: new Date(product.endTime).getFullYear(),
                    month: new Date(product.endTime).getMonth(),
                    date: new Date(product.endTime).getDate(),
                    hour: new Date(product.endTime).getHours(),
                    minute: new Date(product.endTime).getMinutes(),
                    second: new Date(product.endTime).getSeconds(),
                    millisecond: new Date(product.endTime).getMilliseconds(),
                  }"
                  :start="time"
                  @ended="end"
                />
              </div>
              <v-divider></v-divider>
              <div v-if="status == true" class="mt-4">
                <h4 class="text-caption">Auction has ended</h4>
              </div>
              <div class="mt-4">
                <h4 class="text-subtitle">Product Details</h4>
                <v-divider></v-divider>
                <div>
                  <span class="text-caption">Name:</span>
                  <span class="text-body-2"> {{ product.name }} </span>
                </div>
                <div>
                  <v-img
                    :src="`http://127.0.0.1:4000/images/products/${product.productCover}`"
                    contain
                  ></v-img>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <h2 class="text-caption">Auction starts in...</h2>
        <Counter
          :end="{
            year: new Date(product.startTime).getFullYear(),
            month: new Date(product.startTime).getMonth(),
            date: new Date(product.startTime).getDate(),
            hour: new Date(product.startTime).getHours(),
            minute: new Date(product.startTime).getMinutes(),
            second: new Date(product.startTime).getSeconds(),
            millisecond: new Date(product.startTime).getMilliseconds(),
          }"
          :start="time"
          @ended="started = true"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  data() {
    return {
      socket: io('http://localhost:4000'),
      msg: '',
      started: false,
      time: new Date(),
      status: false,
      over: false,
      isFormValid: false,
      userMessages: [],
      users: [],
      noOfUsers: '',
      bids: [],
      lastBid: '',
      winner: '',
    }
  },
  computed: {
    product() {
      return this.$store.getters.getAuctionProduct
    },
    lastNo() {
      return this.product.startingBid * 1
    },
    rules() {
      let rule1
      let rule2
      if (!this.lastBid.msg) {
        const rule = (v) =>
          v > this.lastNo || 'You cant bid lower than the starting bid'
        // eslint-disable-next-line camelcase
        const rule_2 = (v) =>
          v >= this.lastNo + this.product.minBidInc ||
          `The minimun bid increment is ${this.product.minBidInc}`
        rule1 = rule
        // eslint-disable-next-line camelcase
        rule2 = rule_2
      } else {
        const rule = (v) =>
          v > this.lastBid.msg || 'You cant bid lower than the winning bid'
        rule1 = rule
        // eslint-disable-next-line camelcase
        const rule_2 = (v) =>
          v >= this.lastBid.msg * 1 + this.product.minBidInc ||
          `The minimun bid increment is $${this.product.minBidInc}`
        // eslint-disable-next-line camelcase
        rule2 = rule_2
      }
      const rules = [rule1, rule2]
      return rules
    },
    startnow() {
      return this.started
    },
  },
  watch: {
    lastBid() {
      const x = Math.round(new Date(this.product.endTime) / 1000)
      const y = Math.round(new Date() / 1000)
      const check = x - y

      if (check <= 5 && check >= 0) {
        this.add()
      }

      // if (check <= 5 && check >= 0) {
      //   alert(`${x - y}`)
      // } else {
      //   alert('nothing happens')
      // }
    },
  },
  beforeDestroy() {
    this.socket.disconnect()
  },
  mounted() {
    this.getProduct()
    this.checkIf()
    this.socket.on('message', (data) => {
      this.userMessages.push(data)
    })
    this.joinRoom()
    this.socket.on('lastBid', (data) => {
      if (data) {
        this.lastBid = data
        // this.lastNo = data.msg
        // Number(this.lastNo)
      }
    })
  },
  created() {
    this.timer()
  },
  methods: {
    add() {
      const x = new Date(this.product.endTime)
      x.setSeconds(x.getSeconds() + 30)
      this.$store.dispatch('addTime', { id: this.product.id, newTime: x })
    },
    checkIf() {
      const start = this.$store.getters.getAuctionProduct
      if (new Date().getTime() > new Date(start.startTime).getTime()) {
        this.started = true
      }
    },
    end() {
      this.status = true
      this.over = true
      this.socket.emit('Winner', 'ended')
      this.socket.on('won', (data) => {
        this.winner = data.username
      })
    },
    timer() {
      setInterval(() => {
        this.time = new Date()
      }, 1000)
    },
    getProduct() {
      this.$store.dispatch('singleProduct', {
        slug: this.$route.params.id,
        name: 'auction',
      })
    },
    send() {
      // emit message to the server
      this.socket.emit('chatMessage', this.msg)
      // this.lastNo = this.msg * 1
      this.msg = ''
    },
    joinRoom() {
      this.socket.emit('joinRoom', {
        username: this.$auth.user.username,
        photo: this.$auth.user.photo,
        room: this.$route.params.id,
        userId: this.$auth.user.id,
      })

      this.socket.on('roomUsers', (data) => {
        const hold = data.users
        const x = []
        hold.forEach((e) => {
          const user = { username: e.username, photo: e.photo }
          x.push(user)
        })
        this.users = x
        this.noOfUsers = this.users.length
      })
    },
  },
}
</script>

<style scoped>
.ps {
  height: 50vh;
  max-height: 50vh;
  /* overflow: scroll; */
}
</style>
