<template>
  <div class="px-2">
    <v-row>
      <v-col
        v-for="i in 3"
        :key="i"
        v-animate-onscroll="{
          down: `animate__animated animate__backInRight`,
        }"
        cols="4"
      >
        <v-row>
          <v-col cols="12">
            <v-img height="50" contain :src="`/images/icon${i}.webp`"></v-img>
          </v-col>
          <v-col cols="12">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae doloremque facilis et accusantium quod illo minima
              vitae reprehenderit explicabo voluptate, quibusdam assumenda
              officiis a, at quisquam reiciendis dolores incidunt. Autem.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pt-0">
      <v-col v-for="i in 2" :key="i" cols="6" class="px-0">
        <v-img :src="`/images/auction${i}.jpg`" height="434.67"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pb-0 pt-4">
        <h4 class="text-h5 text--secondary">Latest Auctions</h4>
      </v-col>
      <v-col
        v-for="i in 4"
        :key="i"
        v-animate-onscroll="{
          down: `animate__animated animate__backInLeft`,
        }"
        cols="3"
      >
        <v-card flat color="transparent">
          <v-img
            :src="`/images/product(${i}).jpeg`"
            height="434.67"
            gradient="to top right, rgba(100, 115, 101, .33), rgba(25, 32, 62, .8)"
          ></v-img>
          <v-card-title>Elem D'ior Alanctara</v-card-title>
          <v-card-subtitle>$500.00</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pb-0 pt-4">
        <h4 class="text-h5 text--secondary">Most watched Auctions</h4>
      </v-col>
      <v-col
        v-for="i in 4"
        :key="i"
        v-animate-onscroll="{
          down: `animate__animated animate__backInUp`,
        }"
        cols="3"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card flat color="transparent">
              <v-img
                :src="`/images/product(${i + 1}).jpeg`"
                height="454.67"
                gradient="to top right, rgba(100, 115, 101, .33), rgba(25, 32, 62, .8)"
              ></v-img>
              <v-card-title>Elem D'ior Alanctara</v-card-title>
              <v-card-subtitle>$500.00</v-card-subtitle>
              <v-fade-transition>
                <v-overlay v-show="hover" color="#036358" absolute>
                  <v-row class="text-center pr-16">
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="6">
                          <v-btn outlined rounded color="white" small>
                            bid
                          </v-btn>
                        </v-col>
                        <v-col cols="6">
                          <v-btn
                            outlined
                            rounded
                            color="white"
                            small
                            @click="overview"
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
  </div>
</template>

<script>
export default {
  methods: {
    overview() {
      this.$router.push(`/products/${this.slug}`)
    },
  },
}
</script>
