<template>
  <div>
    <div style="height: 100vh">
      <div class="view" style="height: 100vh">
        <!-- <v-container dark>
          <div>
            <v-row>
              <br v-for="i in 10" :key="i" />
            </v-row>
            <v-row class="text-left">
              <v-col cols="8">
                <h3 class="white--text text-h3">
                  Experience the Feeling of the Matrix
                </h3>
                <p class="white--text text-body-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore qui velit natus sunt ipsam in? Ut, laborum fugiat
                  nemo unde excepturi blanditiis iusto cumque amet dolorum
                  aliquam quae voluptate illo.
                </p>
              </v-col>
            </v-row>
          </div>
        </v-container> -->
        <!-- <v-img
          src="https://thumbs.dreamstime.com/b/win-lottery-surprised-mature-couple-winning-online-auction-bid-looking-laptop-copy-space-163221958.jpg"
          gradient="to top right, rgba(100, 115, 101, .33), rgba(25, 32, 62, .8)"
        >
          <v-container dark>
            <div>
              <v-row>
                <br v-for="i in 20" :key="i" />
              </v-row>
              <v-row class="text-center">
                <v-col cols="12">
                  <v-btn
                    outlined
                    rounded
                    color="white"
                    class="animate__animated animate__bounceInRight"
                    >Newsletter</v-btn
                  >
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-img> -->
      </div>
    </div>
    <v-container class="pt-0 pl-0 pr-0" fluid>
      <!-- <Overview /> -->
      <test />
      <!-- <Timeline /> -->
      <Ratings />
      <Parallax />
      <Sponsors />
    </v-container>
  </div>
</template>

<script>
// import Overview from '@/components/Home/Overview'
import Sponsors from '@/components/Home/Sponsors'
import Parallax from '@/components/Home/Parallax'
import Ratings from '@/components/Home/Ratings'
// import Timeline from '@/components/Home/Timeline'
import test from '@/components/Home/test'
export default {
  components: {
    // Overview,
    Sponsors,
    Parallax,
    Ratings,
    // Timeline,
    test,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.customize-header {
  color: #ac3b61;
}
.review {
  background-color: silver;
}
.view {
  background: url('https://content.fortune.com/wp-content/uploads/2019/08/Future-of-Auctions-Sothebys-Bobs-Watches.jpg')
    no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>
