<template>
  <v-row>
    <v-col cols="4">
      <v-text-field
        v-model.number="paymentData.amount"
        outlined
        shaped
        type="number"
        label="Enter amount"
      ></v-text-field>
    </v-col>
    <v-col cols="3" class="pa-8">
      <v-btn color="blue" outlined block @click="payViaService">Deposit</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: '',
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          counsumer_id: '7898',
          consumer_mac: 'kjs9s8ss7dd',
        },
        customer: {
          name: this.$auth.user.name,
          email: this.$auth.user.email,
          phone_number: '081845***044',
        },
        customizations: {
          title: 'BidderReaper',
          description: 'Deposit funds to BidReaper',
          logo: '/images/logo2.png',
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
    }
  },
  methods: {
    payViaService() {
      this.payWithFlutterwave(this.paymentData)
    },
    makePaymentCallback(response) {
      this.$axios
        .post('http://localhost:4000/api/v1/transactions', {
          amount: response.amount,
          name: 'deposit',
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch((e) => {
          console.log(e)
        })
      // console.log('Pay', response)
      // console.log('Pay', response.amount)
      this.$auth.user.fund[0].balance += response.amount
    },
    closedPaymentModal() {
      console.log('payment is closed')
    },
    generateReference() {
      const date = new Date()
      return date.getTime().toString()
    },
  },
}
</script>
