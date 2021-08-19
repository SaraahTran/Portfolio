
<template>
    <div class="section">

  <v-container grid-list-md>
      <v-layout row justify-center align-center wrap class="mt-4 pt-2 px-0">
        <v-flex xs12 sm12 md6 lg6 xl6>
          <v-container text-xs-left>
            <h1 class="display-2 px-0 text-uppercase"><v-card flat color=transparent>
              <span>My </span>
              <span class="purple--text font-weight-bold">Portfolio</span></v-card>
            </h1></v-container
          >
          <div>

            <v-flex  v-for="portfolio in portfolios" :key="portfolio.src">
            <v-card
            :to="'/portfolio/'+(portfolio.title).toLowerCase()"
              max-width="450"
              text-xs-center
              color="transparent"
              outlined
              shaped
              tile
              hover
              class="align-center my-3 px-3 pb-4 pt-0 md-3 m-2 justify-center"
            >
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{portfolio.title}}</v-flex>
          </v-card-title>
              <v-img :src="portfolio.src" aspect-ratio="1" height="60" contain></v-img>

           

            </v-card></v-flex>

           
          </div>
        </v-flex>

        <v-flex s12 sm12 md6 lg6 xl6>
          <v-img
            class="ml-auto"
            src="/images/projects-image.png"
            max-width="250"
          ></v-img>
        </v-flex> </v-layout
    ></v-container>

</div>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "Sarah Tran",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Sarah Tran's Portfolio Web Development Video Editing Graphic Design Front-End Advetising"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },
   
      {
        property: "og:description",
        content:
          "Sarah Tran's Portfolio Web Design Graphic Design Front-End Marketing"
      }
    ]
  },
  data() {
    return {
      portfolios: [
        {
          src: "images/ux-ui.png",
          title: "Web"
        },
        {
          src: "images/web-design.png",
          title: "Graphic"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>