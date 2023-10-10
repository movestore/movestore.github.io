<template>
  <div>
    <v-row>
      <v-col cols="12" >
        <h3>MoveApps wins Conservation Tech Award</h3>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" md="4" sm="3" class="align-self-start">
        <v-img :src="image" max-height="250px" contain />
      </v-col>
      <v-col cols="12" md="8" sm="9">
        <p>We are delighted to announce that Earth Ranger has named MoveApps as a grantee of the Conservation Technology Award for 2022. MoveApps was one of only two organizations to be awarded this no-strings-attached grant of $15,000.</p>
        <p>We are thrilled to be recognized for our work leveraging tracking data to safeguard wildlife across the globe. We pass on our heartfelt thanks to the users and developers who have contributed to this success. <router-link :to="{ name: 'GetInvolved'}">This is an award we all share!</router-link></p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ConservationTechAward",

  data: () => ({
    images: [
        require('@/views/Marketing/News/image0.jpeg'),
        require('@/views/Marketing/News/image1.jpeg')
      ]
  }),
  computed: {
    image() {
      let min = 0
      let max = this.images.length - 1
      let idx = Math.floor(Math.random() * (max - min + 1) + min)
      if (idx >= 0 && idx < this.images.length) { // paranoia :D
        return this.images[idx]
      }
      return this.images[0]
    }
  }
}
</script>

<style scoped>

</style>
