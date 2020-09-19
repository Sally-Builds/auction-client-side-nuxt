<template>
  <v-row class="pt-0 px-3">
    <v-col cols="12" class="text-center pb-0">
      <h4 class="customize-header text-h4">Auction Overview</h4>
      <p class="text-body-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
        Deleniti unde laudantium ipsam totam ut porro nemo voluptate itaque
        perferendis eum, <br />
        a quam deserunt, amet dolore. Animi, omnis cupiditate. Nostrum, est?
      </p>
    </v-col>
    <v-col v-for="i in 6" :key="i" cols="4" class="px-0 py-0" align="center">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            v-animate-onscroll.repeat="{
              down: `animate__animated animate__fadeIn`,
              up: `animate__animated animate__fadeIn`,
            }"
            flat
            width="auto"
          >
            <v-img
              :src="`/images/product(${i}).jpeg`"
              height="350"
              gradient="to top right, rgba(100, 115, 101, .33), rgba(25, 32, 62, .8)"
            ></v-img>
            <v-fade-transition>
              <v-overlay v-if="hover" color="#036358" absolute>
                <v-btn text>Top Sales</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>
