<template>
  <v-row>
    <v-col cols="6">
      <v-text-field
        v-model="password"
        placeholder="password"
        shaped
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field placeholder="new Password" shaped></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field placeholder="confirm new Password" shaped></v-text-field>
    </v-col>
    <v-col cols="6" class="pa-8">
      <v-btn block outlined color="blue"> Update password</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    }
  },
}
</script>
