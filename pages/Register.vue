<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="1">
        <v-btn class="animate__animated animate__bounceInLeft" text nuxt to="/">
          <v-icon>mdi-arrow-left</v-icon> <span>go back to login</span>
        </v-btn>
      </v-col>
      <v-col cols="12" md="12">
        <v-row align="center" justify="center" style="height: auto">
          <v-card
            class="ma-3 pa-6 animate__animated animate__bounceInRight"
            width="350px"
            dark
          >
            <v-row>
              <v-col class="ma-3 pa-6">
                <h5 class="text-h4 text-center grey--text">Registration</h5>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <div class="pt-6">
              <v-text-field
                v-model="name"
                label="full name"
                outlined
                shaped
              ></v-text-field>
              <v-text-field
                v-model="username"
                label="username"
                outlined
                shaped
              ></v-text-field>
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
              <v-text-field
                v-model="confirmPassword"
                label="confirmPassword"
                outlined
                shaped
              ></v-text-field>
              <v-divider></v-divider>
              <div class="mt-4">
                <v-row justify="space-around">
                  <v-checkbox
                    v-model="check"
                    color="primary"
                    class="font-italic"
                    label="Do you agree to the terms and condition"
                  ></v-checkbox>
                  <v-btn text color="primary" @click="signup">Register</v-btn>
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
      name: 'joe Frazer',
      username: 'smoking Joe',
      email: 'jo@gmail.com',
      password: 'test1234',
      confirmPassword: 'test1234',
    }
  },
  methods: {
    async signup() {
      try {
        const data = {
          name: this.name,
          email: this.email,
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
        const res = await this.$axios.post(
          'http://localhost:4000/api/v1/users/signup',
          data
        )
        await this.$auth.loginWith('local', {
          data: {
            email: data.email,
            password: data.password,
          },
        })
        await this.$axios.post('http://localhost:4000/api/v1/funds', {})
        console.log(res)
        this.$router.push('/')
      } catch (e) {
        console.log(e.response.data)
      }
    },
  },
}
</script>
