<template>
  <div>
    <v-container v-if="product" fluid class="px-3">
      <v-row>
        <v-col cols="6">
          <v-card flat class="mx-auto my-5" max-width="374">
            <v-carousel :show-arrows="true">
              <v-carousel-item
                v-for="i in product.images"
                :key="i"
                :src="`http://127.0.0.1:4000/images/products/${i}`"
                contain
              >
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <h5 class="text-h5 grey--text">Product Name:</h5>
              <span class="text-overline grey--text">{{ product.name }} </span>
            </v-col>
            <v-col cols="12">
              <h5 class="text-h5 grey--text">Product Description:</h5>
              <span class="brown--text text-caption"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Magnam ullam, velit incidunt reprehenderit cupiditate iusto
                repudiandae, temporibus amet ducimus, fuga explicabo recusandae
                itaque odio perspiciatis delectus eos necessitatibus dolorem
                nobis?</span
              >
            </v-col>
            <v-col cols="12">
              <h5 class="text-h5 grey--text">Starting Bid:</h5>
              <span class="text-overline purple--text"
                >${{ product.startingBid }}.00</span
              >
            </v-col>
            <v-col cols="12">
              <h5 class="text-h5 grey--text">Minimum Bid Increment:</h5>
              <span class="text-overline purple--text"
                >${{ product.minBidInc }}.00</span
              >
            </v-col>
            <v-col cols="12">
              <h5 class="text-h5 grey--text">
                Product Auction Starts in 🕒🕒🕒:
              </h5>
              <span class="text-h6 purple--text">
                <Counter
                  v-if="!status"
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
                  @ended="status = true"
                />
                <span v-if="status" class="text-h6 purple--text"
                  >Bidding is has started</span
                >
              </span>
            </v-col>
            <v-col cols="12">
              <h5 class="text-h5 grey--text">Product Auction Rules:</h5>
              <span>
                <h5 class="text-caption grey--text">Time:</h5>
                <p class="text-body-2 brown--text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam ullam, velit incidunt reprehenderit cupiditate iusto
                  repudiandae, temporibus amet ducimus, fuga explicabo
                  recusandae itaque odio perspiciatis delectus eos
                  necessitatibus dolorem nobis?
                </p>
                <h5 class="text-caption grey--text">Shipping:</h5>
                <p class="text-body-2 brown--text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam ullam, velit incidunt reprehenderit cupiditate iusto
                  repudiandae, temporibus amet ducimus, fuga explicabo
                  recusandae itaque odio perspiciatis delectus eos
                  necessitatibus dolorem nobis?
                </p>
              </span>
            </v-col>
            <v-col v-if="status" cols="12" class="text-center">
              <v-btn nuxt large outlined dark color="blue" @click="enter"
                >Enter Bidding Arena</v-btn
              >
            </v-col>
            <v-col v-else cols="12" class="text-center">
              Bidding will Start Soon 🕒🕒🕒
            </v-col>
          </v-row>
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
      status: false,
    }
  },
  computed: {
    product() {
      return this.$store.getters.getSingleProduct
    },
  },
  mounted() {
    this.$store.dispatch('singleProduct', {
      slug: this.$route.params.id,
      name: 'product',
    })
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
    enter() {
      this.$router.push(`/auction/${this.$route.params.id}`)
    },
    add() {
      const x = new Date(this.product.endTime)
      x.setSeconds(x.getSeconds() + 30)
      this.$store.dispatch('addTime', { id: this.product.id, newTime: x })
    },
  },
}
</script>
