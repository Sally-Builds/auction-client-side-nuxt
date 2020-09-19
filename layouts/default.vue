<template>
  <v-app>
    <Navigation />
    <v-main app>
      <nuxt class="pb-8" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('history')
  },
}
</script>

<style scoped>
.v-application {
  background-color: #f3efeb;
}
:root {
  --animate-duration: 2500ms;
  --animate-delay: 1.5s;
}
</style>
