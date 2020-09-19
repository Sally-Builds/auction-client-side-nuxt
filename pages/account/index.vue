<template>
  <v-container fluid class="pb-5">
    <v-row>
      <v-col cols="4">
        <p>
          <span class="text-title-1">Availaible account Balance:</span
          ><span class="text--secondary">${{ amount }}.00</span>
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-expansion-panels v-model="panel" multiple dark>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Change Account Details
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <Details />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Change Password
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ChangePassword />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Deposit Funds </v-expansion-panel-header>
            <v-expansion-panel-content>
              <Deposit />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Transaction History
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <History />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Details from '@/components/Account/Details'
import Deposit from '@/components/Account/Deposit'
import History from '@/components/Account/History'
import ChangePassword from '@/components/Account/ChangePassword'
export default {
  components: {
    Details,
    ChangePassword,
    Deposit,
    History,
  },
  computed: {
    amount() {
      // if (this.$auth.user.fund.length === 0) {
      //   return 0
      // }
      return this.$auth.user.fund[0].balance
    },
  },
  // mounted() {
  //   this.$store.dispatch('history')
  //   const x = this.$store.getters.getHistory
  //   console.log(x)
  // },
}
</script>

<style lang="stylus" scoped></style>
