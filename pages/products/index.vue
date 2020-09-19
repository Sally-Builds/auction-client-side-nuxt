<template>
  <div>
    <div style="height: 100vh" class="hidden-sm-and-down">
      <div class="view" style="height: 100vh">
        <v-container dark>
          <div>
            <v-row>
              <br v-for="i in 10" :key="i" />
            </v-row>
            <v-row class="text-left">
              <v-col cols="12">
                <h3 class="white--text display-2">
                  Choose from our variety of auction sales
                </h3>
                <p class="white--text text-h5">
                  All it Takes to win is a click! What are you waiting for?
                </p>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
    <div style="height: 80vh" class="hidden-md-and-up">
      <div class="view" style="height: 80vh">
        <v-container dark>
          <div>
            <v-row>
              <br v-for="i in 20" :key="i" />
            </v-row>
            <v-row class="text-left">
              <v-col cols="12">
                <h3 class="black--text display-5">
                  Choose from our variety of auction sales
                </h3>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" class="pb-0 pt-4 text-center">
          <h4 class="text-h5 text--secondary">Auction Gallery</h4>
        </v-col>
        <v-col v-for="(product, i) in products" :key="i" cols="12" md="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                v-animate-onscroll.repeat="{
                  down: `animate__animated animate__fadeIn`,
                  up: `animate__animated animate__fadeIn`,
                }"
                width="300"
              >
                <v-img
                  :src="`http://127.0.0.1:4000/images/products/${product.productCover}`"
                  height="200"
                  gradient="to top right, rgba(100, 115, 101, .33), rgba(25, 32, 62, .8)"
                ></v-img>
                <v-card-title class="text-subtitle-1"
                  >{{ product.name.substring(0, 25) }}...
                </v-card-title>

                <v-card-subtitle class="text-caption">
                  Starting Bid:
                  <span class="text--secondary purple--text"
                    >${{ product.startingBid }}</span
                  >
                </v-card-subtitle>
                <v-card-title>Bid starts in</v-card-title>
                <v-card-text
                  ><Counter
                    :end="{
                      year: new Date(product.start).getFullYear(),
                      month: new Date(product.start).getMonth(),
                      date: new Date(product.start).getDate(),
                      hour: new Date(product.start).getHours(),
                      minute: new Date(product.start).getMinutes(),
                      second: new Date(product.start).getSeconds(),
                      millisecond: new Date(product.start).getMilliseconds(),
                    }"
                    :start="time"
                    @ended="end(product.id)"
                /></v-card-text>
                <v-fade-transition>
                  <v-overlay v-show="hover" color="#036358" absolute>
                    <v-row class="text-center pr-16">
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="6">
                            <v-btn
                              v-if="product.ongoing"
                              outlined
                              rounded
                              color="white"
                              small
                              @click="enterRoom(product.slug)"
                            >
                              bid
                            </v-btn>
                            <v-btn v-else disabled text> bid </v-btn>
                          </v-col>
                          <v-col cols="6">
                            <v-btn
                              outlined
                              rounded
                              color="white"
                              small
                              @click="goTo(product.slug)"
                            >
                              View Details
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  components: {
    Counter,
  },
  data() {
    return {
      time: new Date(),
      pages: 1,
      status: false,
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
  },
  created() {
    this.timer()
  },
  methods: {
    timer() {
      setInterval(() => {
        this.time = new Date()
      }, 1000)
    },
    goTo(slug) {
      this.$store.dispatch('singleProduct', { slug, name: 'product' })
      this.$router.push(`/products/${slug}`)
    },
    enterRoom(slug) {
      this.$router.push(`/auction-room/${slug}`)
    },
    end(value) {
      // this.status = value
      // console.log(value)
      this.$store.dispatch('changeStatus', value)
    },
  },
}
</script>

<style>
.view {
  background: url('~@/static/images/background8.jpg') no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>
