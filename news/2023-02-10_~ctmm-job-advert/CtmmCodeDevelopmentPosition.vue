<template>
  <div>
    <v-row>
      <v-col cols="12" >
        <h3>Short-term code development position: Bring ctmm to MoveApps</h3>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12" md="4" sm="3" class="align-self-start">
        <v-img :src="image" max-height="250px" contain />
      </v-col>
      <v-col cols="12" md="8" sm="9">
        <p>We are looking for an experienced R-programmer that can <blank-target-link :url="pdf">develop a sequence of Apps for MoveApps</blank-target-link> using the <code>ctmm</code> (continuous-time movement modeling) R package. The assignment can be started anytime and must be finalized by 12 June 2023. The Apps have to be set up in collaboration with the MoveApps development team and under advice by the ctmm package developers.</p>
        <p>Payment is $15,000 USD paid half at the midway point and half at the successful end of the project. Work can be performed remotely or in collaboration with one of the institutes of the ctmm team or one of the institutes of the MoveApps team. <a href="mailto:info@moveapps.org">Contact us!</a></p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import image0 from "@/views/Marketing/News/CtmmMoveApps/ctmm2moveapps.png";
import BlankTargetLink from "@/components/Helper/BlankTargetLink.vue";

export default {
  name: "CtmmCodeDevelopmentPosition",
  components: {BlankTargetLink},

  data: () => ({
    images: [
        image0
      ],
    pdf: "/news/Ctmm_to_MoveApps_-_Job_Advert.pdf"
  }),
  computed: {
    image() {
      return this.images[0]
    }
  }
}
</script>

<style scoped>

</style>