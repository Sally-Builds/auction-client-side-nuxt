<template>
  <div>
    <v-row class="pt-0 pb-0">
      <v-col
        v-for="i in 2"
        :key="i"
        v-animate-onscroll="{
          down: `animate__animated animate__backInUp`,
        }"
        cols="6"
        class="px-0 pb-0"
      >
        <v-img
          :src="`/images/auction${i + 2}.jpg`"
          height="474.67"
          gradient="to top right, rgba(100, 115, 101, .33), rgba(25, 32, 62, .8)"
          ><v-container dark>
            <div>
              <v-row>
                <br v-for="e in 10" :key="e" />
              </v-row>
              <v-row class="text-center">
                <v-col cols="12">
                  <v-btn
                    outlined
                    rounded
                    color="white"
                    large
                    class="animate__animated animate__bounceInRight"
                    >Newsletter</v-btn
                  >
                </v-col>
                <v-col cols="12">
                  <p class="text-title-1 white--text">
                    Whatever it takes to win! Do It!<br />
                    Its Only a matter of time till you Start winning.
                  </p>
                </v-col>
              </v-row>
            </div>
          </v-container></v-img
        >
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="8">
            <v-img src="/images/product(4).png" contain></v-img>
          </v-col>
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col> <br v-for="i in 7" :key="i" /> </v-col>
              <v-col cols="12" align="center" justify="center">
                <h3 class="text-h2">
                  Service<br />
                  Fatigue shop
                </h3>
              </v-col>
              <v-col cols="12" align="center" justify="center">
                <h3 class="text-h5 grey--text">Creative Uniform</h3>
              </v-col>
              <v-col cols="12" align="center" justify="center">
                <p class="text-center text-body-2">
                  Our best pair of fitting bottoms to date. Our Service Fatigue
                  Pants are the perfect the perfect alternatives to denim. All
                  it takes to get is a quick brown fox jumping over a lazy dog.
                  <br />
                </p>
              </v-col>
              <v-col cols="12" align="center" justify="center">
                <v-btn outlined x-large block>Explore the fatigues</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <!-- <v-row class="px-0 pb-0" no-gutters>
    <v-col cols="12" class="text-center pb-0">
      <h4 class="customize-header text-h5">What our customers say about us</h4>
    </v-col>
    <v-col cols="12">
      <v-carousel cycle height="auto" hide-delimiters>
        <v-carousel-item v-for="i in 3" :key="i">
          <v-sheet color="silver" height="400">
            <v-row>
              <v-col cols="12">
                <v-card color="transparent" flat>
                  <v-row>
                    <v-col cols="12" class="text-center">
                      <v-avatar size="80">
                        <v-img src="/images/product(4).jpeg"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="12" class="text-center">
                      <v-rating
                        v-model="rating"
                        dark
                        background-color="white"
                        color="#ac3b61"
                        readonly
                      ></v-rating>
                    </v-col>
                    <v-col cols="12" class="text-center pa-5">
                      <blockquote class="text-body-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam, architecto assumenda. Natus quod rem ad molestiae
                        perspiciatis deleniti temporibus ducimus tempora libero,
                        culpa, illo asperiores, et ab inventore alias sed?
                        <br />
                        <cite class="text-title-1">Uzoagulu Joshua</cite>
                      </blockquote>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row> -->
</template>

<script>
export default {
  data() {
    return {
      rating: 3,
    }
  },
}
</script>
