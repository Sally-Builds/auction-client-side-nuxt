<template>
  <div>
    <v-row>
      <v-col cols="12">
        {{ $auth.user.name }}
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model.trim="email"
          type="text"
          :placeholder="$auth.user.email"
          label="email"
          outlined
          shaped
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model.trim="name"
          type="text"
          :placeholder="$auth.user.name"
          shaped
          label="full name"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model.trim="username"
          type="text"
          :placeholder="user.username"
          shaped
          label="username"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col md="1">
            <v-avatar>
              <v-img
                :src="`http://127.0.0.1:4000/images/users/${$auth.user.photo}`"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col md="11">
            <v-file-input
              v-model="file"
              accept="image/*"
              label="Upload Profile Picture"
            ></v-file-input>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn block color="blue" outlined @click="submit"> Update</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      name: '',
      email: '',
      file: [],
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
  methods: {
    async submit() {
      try {
        const formData = new FormData()
        if (this.username !== '') formData.append('username', this.username)
        if (this.name !== '') formData.append('name', this.name)
        if (this.email !== '') formData.append('email', this.email)
        if (this.file !== []) formData.append('photo', this.file)

        const res = await this.$axios({
          method: 'PATCH',
          url: 'http://localhost:4000/api/v1/users/updateMe',
          data: formData,
        })
        const keys = []
        for (const key of formData.keys()) {
          keys.push(key)
        }
        for (let i = 0; i <= keys.length - 1; i++) {
          const value = keys[i]
          let data = formData.get(value)
          if (value === 'photo') {
            data = await res.data.data.user.photo
          }
          this.$auth.user[value] = data
        }
        this.username = ''
        this.name = ''
        this.email = ''
        this.file = []
      } catch (e) {
        console.log(e.response.data)
      }
    },
  },
}
</script>
