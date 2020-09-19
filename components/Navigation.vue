<template>
  <div>
    <v-navigation-drawer v-model="sideNav" app temporary dense>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              v-if="$auth.loggedIn"
              :src="`http://127.0.0.1:4000/images/users/${$auth.user.photo}`"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Joshua </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <div v-for="(e, i) in links" :key="i">
          <v-list-item v-if="e.if">
            <v-list-item-icon> icon</v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn text> {{ e.text }} </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div>
          <v-list-item v-if="$auth.loggedIn">
            <v-list-item-icon> icon</v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn nuxt text @click="logout"> Logout </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar
      app
      elevate-on-scroll
      :color="scrollPosition < 50 ? 'transparent' : '#edc7b7'"
    > -->
    <v-app-bar elevate-on-scroll app light color="white">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="pt-n5">
        <v-img height="50" contain src="/images/logo2.png"></v-img>
      </v-toolbar-title>
      <!-- <v-toolbar-title>
        <v-img height="60" contain src="/images/logo2.png"></v-img>
      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-toolbar-item v-for="(link, i) in links" :key="i">
          <v-btn v-if="link.if" nuxt text :to="link.to">{{ link.text }}</v-btn>
        </v-toolbar-item>
        <v-toolbar-item>
          <v-btn v-if="$auth.loggedIn" nuxt text @click="logout">Logout</v-btn>
        </v-toolbar-item>
        <v-btn text nuxt to="/account"
          ><v-avatar>
            <v-img
              v-if="$auth.loggedIn"
              :src="`http://127.0.0.1:4000/images/users/${$auth.user.photo}`"
            ></v-img> </v-avatar
        ></v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      sideNav: false,
    }
  },
  computed: {
    links() {
      return [
        { to: '/', text: 'Home', if: true },
        { to: '/about', text: 'About', if: true },
        { to: '/products', text: 'Auction Gallery', if: true },
        { to: '/login', text: 'Login', if: !this.$auth.loggedIn },
        { to: '/register', text: 'Register', if: !this.$auth.loggedIn },
        // { to: '/', text: 'Logout', if: this.$auth.loggedIn },
      ]
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    logout() {
      this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.change_color {
  background-color: #a28089;
}
.change {
  background-color: transparent;
}
</style>
