<template>
  <!-- timeline -->
  <v-row class="px-3">
    <v-col cols="12" class="text-center">
      <h4 class="customize-header text-title-2">Here is our timeline</h4>
    </v-col>
    <v-col class="text-center">
      <v-timeline>
        <v-timeline-item v-for="i in timelines" :key="i" large :color="i.color">
          <template v-slot:opposite>
            <span> {{ i.intro }} </span>
          </template>
          <v-card elevation="1" color="transparent">
            <v-row class="text-center">
              <v-col cols="12">
                <h5 class="headline customize-header">
                  {{ i.title }}
                </h5>
                <v-card-text>
                  {{ i.text }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
  <!-- timeline -->
</template>

<script>
export default {
  data() {
    return {
      timelines: [
        {
          intro: 'You are here!',
          title: 'Welcome',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,alias accusantium? Necessitatibus.',
          color: 'blue',
        },
        {
          intro: 'Here is what you gain',
          title: 'Offer',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, alias accusantium? Necessitatibus quae libero, rem temporibus id perferendis nesciunt magnam maiores.',
          color: 'purple',
        },
        {
          intro: 'What we do here',
          title: 'About',
          text:
            'Necessitatibus quae libero, rem temporibus id perferendis nesciunt magnam maiores ipsum doloribus facilis debitis nobisquibusdam nostrum cumque suscipit!',
          color: 'green',
        },
        {
          intro: 'You win and we win',
          title: 'Online Auction',
          text:
            'maiores ipsum doloribus facilis debitis nobis quibusdam nostrum cumque suscipit!',
          color: 'red',
        },
      ],
    }
  },
}
</script>
