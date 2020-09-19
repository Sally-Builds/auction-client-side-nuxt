<template>
  <v-row>
    <v-col cols="8">
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Type</th>
              <th class="text-left">amount</th>
              <th class="text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, i) in history" :key="i">
              <td>
                <v-sheet :color="value.color"> {{ value.type }}l</v-sheet>
              </td>
              <td>${{ value.amount }}.00</td>
              <td>{{ new Date(value.time) }}</td>
            </tr>
            <tr>
              <td>
                <v-sheet color="red">Deposit</v-sheet>
              </td>
              <td>$500.00</td>
              <td>13-05-2020 5:43pm</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    history() {
      return this.$store.getters.getHistory
    },
  },
  // mounted() {
  //   this.$store.dispatch('history')
  //   const x = this.$store.getters.getHistory
  //   console.log(x)
  // },
}
</script>
