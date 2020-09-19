<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" style="height: auto">
          <v-card
            class="ma-3 pa-6 animate__animated animate__bounceInRight"
            width="350px"
            dark
          >
            <v-row>
              <v-col class="ma-3 pa-6">
                <h5 class="text-h4 text-center grey--text">Login</h5>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <div class="pt-6">
              <v-text-field
                v-model="email"
                label="email"
                outlined
                shaped
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                outlined
                shaped
              ></v-text-field>
              <v-divider></v-divider>
              <div class="mt-4 mb-4">
                <v-row justify="space-around">
                  <v-btn text class="font-italic" style="font-size: 9px"
                    >forgot password</v-btn
                  >
                  <v-btn dark outlined color="primary" @click="login"
                    >Login</v-btn
                  >
                </v-row>
              </div>
              <v-divider></v-divider>
              <div class="mt-4">
                <v-row justify="space-around">
                  <p class="font-italic" style="font-size: 12px">
                    Don't have an account
                  </p>
                  <v-btn text color="primary" nuxt to="/register"
                    >Register</v-btn
                  >
                </v-row>
              </div>
            </div>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const formData = {
          email: this.email,
          password: this.password,
        }
        await this.$auth.loginWith('local', {
          data: formData,
        })
        this.$router.push('/')
      } catch (e) {
        console.log(e.response.data)
      }
    },
  },
}
</script>
