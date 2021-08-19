<template>
  <div class="section">
    <v-container grid-list-md>
      <v-layout row justify-center align-center wrap class="mt-4 pt-2">
        <v-flex xs12 sm12 md6 lg6 xl6>
          <v-card flat color="transparent" max-width="500">
            <v-card-title primary-title>
              <h1 class="display-2 text-uppercase mb-4">
                <span>About </span>
                <span class="purple--text font-weight-bold">Me</span>
              </h1>

              <p>
                Hello! I’m Sarah Tran. I'm a digital designer and front-end
                developer from Melbourne, Australia. I am a student studying a
                Bachelor of Information Technology and Business. I am passionate
                about design, technology, marketing, building great user
                experiences and constantly learning.
              </p>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 sm12 md6 lg6 xl6 xs6 class="text-xs-center"
          ><v-row align="center" justify="center">
            <v-img
              class="ml-auto text-xs-center"
              src="/images/about-image.png"
              max-width="250"
            ></v-img
          ></v-row>
        </v-flex> </v-layout
    ></v-container>
  </div>
</template>

<style>
span {
  letter-spacing: 2px !important;
  font-family: "Poppins", sans-serif;
}
</style>
<script>
export default {
  metaInfo: {
    title: "About",
    titleTemplate: "Sarah Tran",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Sarah Tran's Portfolio Web Development Graphic Design Front-End Marketing",
      },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },

      {
        property: "og:description",
        content:
          "Sarah Tran's Portfolio Web Development Graphic Design Front-End Marketing",
      },
    ],
  },
};
</script>
