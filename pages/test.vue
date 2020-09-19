<template>
  <div>
    <br v-for="i in 13" :key="i" />
    <v-row>
      <v-col cols="6">
        <v-text-field v-model.number="paymentData.amount" type="text">
        </v-text-field>
      </v-col>
    </v-row>

    <button @click="payViaService">Pay Using Code</button>
  </div>
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
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '081845***044',
        },
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg',
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
      console.log('Pay', response)
      console.log('Pay', response.amount)
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
