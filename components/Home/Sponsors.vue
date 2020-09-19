<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <h4 class="headline customize-header">Our official sponsors</h4>
    </v-col>
    <v-col v-for="i in sponsors" :key="i" cols="2">
      <v-img :src="`/images/${i}`" contain height="40"></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        'try1.png',
        'try2.png',
        'try3.png',
        'try4.png',
        'try5.png',
        'try6.png',
        'try7.png',
        'try8.jpg',
        'try9.png',
        'try10.png',
        'try11.png',
        'try12.png',
        'try13.jpg',
        'try14.png',
        'try15.png',
        'try16.png',
        'try17.png',
        'try18.jpg',
        'try19.jpg',
        'try20.jpg',
        'try21.jpg',
        'try22.png',
        'try23.png',
        'try24.png',
        'try25.png',
        'try26.png',
        'try27.png',
        'try28.png',
        'try29.jpg',
        'try30.png',
      ],
    }
  },
}
</script>
