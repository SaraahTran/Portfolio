<template>
  <v-container grid-list-xl>
    <v-card color="transparent" flat>
      <h1 class="text-uppercase display-2 pt-4">
        <span>Graphic </span>
        <span class="purple--text font-weight-bold">Portfolio</span>
      </h1>
      <br />
      <v-text
        >I have worked with a few businesses and marketers and am able to
        combine principles of design and marketing to create materials to
        promote your business.
      </v-text>
    </v-card>
    <br />

    <v-subtitle class="pt-4 mt-4 headline">Logos</v-subtitle>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="logo.dialog"
        lazy
        max-width="1000"
        v-for="logo in logos"
        :key="logo.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on"
            ><v-hover>
              <v-card hover flat color="lightgrey" class="pa-3">
                <v-img
                  :src="logo.poster"
                  :alt="logo.title"
                  height="230"
                  lazy-src="https://cdn.dribbble.com/users/26878/screenshots/3544693/07-loader.gif"
                ></v-img>
                <v-card-title
                  primary-title
                  class="justify-center font-weight-bold"
                  >{{ logo.title }}</v-card-title
                >
                <v-card-subtitle class="text-center"
                  ><p class="text-center">
                    {{ logo.subtitle }}
                  </p></v-card-subtitle
                >
              </v-card></v-hover
            >
          </v-flex>
        </template>
        <v-card class="pa-4" v-if="logo.dialog">
          <v-img :src="logo.poster"></v-img>
          <v-card-text>
            <!--Description insert (for future)-->
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>



    <v-subtitle class="pt-4 mt-4 headline">Business Card</v-subtitle>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="card.dialog"
        lazy
        max-width="1000"
        v-for="card in cards"
        :key="card.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on"
            ><v-hover>
              <v-card hover flat color="lightgrey" class="pa-3">
                <v-img
                  :src="card.poster"
                  :alt="card.title"
                  height="230"
                  lazy-src="https://cdn.dribbble.com/users/26878/screenshots/3544693/07-loader.gif"
                ></v-img>
                <v-card-title
                  primary-title
                  class="justify-center font-weight-bold"
                  >{{ card.title }}</v-card-title
                >
                <v-card-subtitle class="text-center"
                  ><p class="text-center">
                    {{ card.subtitle }}
                  </p></v-card-subtitle
                >
              </v-card></v-hover
            >
          </v-flex>
        </template>
        <v-card class="pa-4" v-if="card.dialog">
          <v-img :src="card.poster"></v-img>
          <v-card-text>
            <!--Description insert (for future)-->
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>



    <v-subtitle class="pt-4 mt-4 headline">Flyer</v-subtitle>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="flyer.dialog"
        lazy
        max-width="1000"
        v-for="flyer in flyers"
        :key="flyer.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on"
            ><v-hover>
              <v-card hover flat color="lightgrey" class="pa-3">
                <v-img
                  :src="flyer.poster"
                  :alt="flyer.title"
                  height="230"
                  lazy-src="https://cdn.dribbble.com/users/26878/screenshots/3544693/07-loader.gif"
                ></v-img>
                <v-card-title
                  primary-title
                  class="justify-center font-weight-bold"
                  >{{ flyer.title }}</v-card-title
                >
                <v-card-subtitle class="text-center"
                  ><p class="text-center">
                    {{ flyer.subtitle }}
                  </p></v-card-subtitle
                >
              </v-card></v-hover
            >
          </v-flex>
        </template>
        <v-card class="pa-4" v-if="flyer.dialog">
          <v-img :src="flyer.poster"></v-img>
          <v-card-text>
            <!--Description insert (for future)-->
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>







  </v-container>
</template>

<style>
.purple--text {
  color: #a3a7ce;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Web Portfolio",
    titleTemplate: "Sarah Tran",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Sarah Tran's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },
   
      {
        property: "og:description",
        content:
          "Sarah Tran's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive",
      },
    ],
  },
  data() {
    return {
      dialog: false,
      logos: [
        {
          dialog: false,
          title: "Sarah Tran",
          poster: "../images/graphic/sarahtran-logo.png",
        },
        {
          dialog: false,
          title: "The Basta Group",
          poster: "../images/graphic/tbg-logo.png",
        },
        {
          dialog: false,
          title: "Access The Cube",
          poster: "../images/graphic/access-the-cube-logo.png",
        },
        {
          dialog: false,
          title: "Coffee Cup",
          poster: "../images/graphic/coffeecup-logo.png",
        },
        {
          dialog: false,
          title: "Dream Cream",
          poster: "../images/graphic/dreamcream-logo.png",
        },
         {
          dialog: false,
          title: "Industry Lessons",
          poster: "../images/graphic/industrylessons-logo.png",
        },
        
      ],
      cards: [
        {
          dialog: false,
          title: "The Basta Group",
          poster: "../images/graphic/tbg-businesscard.png",
        },
      ],
         flyers: [
        {
          dialog: false,
          title: "Heartwell Dental",
          poster: "../images/graphic/heartwell-dental-flyer.png",
        },
      ],
      
      
    };
    
    
  },
};
</script>

<style  scoped>
</style>