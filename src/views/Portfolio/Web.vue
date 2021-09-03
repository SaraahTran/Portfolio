<template>
  <v-container grid-list-xl>
    <v-card color="transparent" flat>
      <h1 class="text-uppercase display-3 pt-4">
        <span>Web </span>
        <span class="purple--text font-weight-bold">Portfolio</span>
      </h1>
      <br />
      <v-text
        >I am very interested and am passionate about front end coding. I am
        always practising coding and learning new technologies such as
        frameworks and languages by doing small personal projects. I am also
        familiar with using CMS platforms and have worked with several
        businesses to create websites for them.
      </v-text>
    </v-card>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on"
            ><v-hover>
              <v-card hover flat color="lightgrey" class="pa-3">
                <v-img
                  :src="project.preview"
                  :alt="project.title"
                  height="230"
                  lazy-src="https://cdn.dribbble.com/users/26878/screenshots/3544693/07-loader.gif"
                ></v-img>
                <v-card-title
                  primary-title
                  class="justify-center font-weight-bold"
                  >{{ project.title }}</v-card-title
                >
                <v-card-subtitle class="text-center"
                  ><p class="text-center">
                    {{ project.subtitle }}
                  </p></v-card-subtitle
                >
              </v-card></v-hover
            >
          </v-flex>
        </template>
        <v-card class="pa-4" v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <v-chip color="#A3A7CE" text-color="white">{{
              project.tech.tech1
            }}</v-chip>
            <v-chip color="#A3A7CE" text-color="white">{{
              project.tech.tech2
            }}</v-chip>
            <v-chip color="#A3A7CE" text-color="white">{{
              project.tech.tech3
            }}</v-chip>
            <v-chip color="#A3A7CE" text-color="white">{{
              project.tech.tech4
            }}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              large
              dark
              color="#A3A7CE"
              :href="project.git"
              target="_blank"
            >
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn
              large
              flat
              dark
              color="#A3A7CE"
              :href="project.demo"
              target="_blank"
            >
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
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
      projects: [
        {
          dialog: false,
          title: "My Portfolio",
          demo: "https://sarahtran.me/projects/6/",
          tech: {
            tech1: "Vue",
            tech2: "HTML",
            tech3: "CSS",
            tech4: "Javascript",
          },
          poster: "../images/web/current-portfolio.png",
          preview: "../images/web/current-portfolio.png",
        },
        {
          dialog: false,
          title: "Access The Cube",
          demo: "accessthecube.com",
          tech: {
            tech1: "Wordpress",
            tech2: "Oxygen",
            tech3: "HTML",
            tech4: "CSS",
          },
          poster: "../images/web/accessthecube-website.png",
          preview: "../images/web/accessthecube-preview.png",
        },
        {
          dialog: false,
          title: "Law Steady",
          demo: "https://www.lawsteady.com",
          tech: {
            tech1: "Wordpress",
            tech2: "Oxygen",
            tech3: "HTML",
            tech4: "CSS",
          },
          poster: "../images/web/lawsteady-website.png",
          preview: "../images/web/lawsteady-preview.png",
        },
        {
          dialog: false,
          title: "Basementpro",
          git: "https://github.com/EldinZaimovic/Digital-Madness-test",
          demo: "https://sarahtran.me/projects/6/",
          tech: {
            tech1: "VUE",
            tech2: "CSS",
            tech3: "HTML",
            tech4: "JavaScript",
          },
          poster: "../images/web/basementpro-website.png",
          preview: "../images/web/basementpro-preview.png",
        },
        {
          dialog: false,
          title: "Calculator",
          git: "https://github.com/SaraahTran/Calculator",
          demo: "https://sarahtran-calculator.netlify.app",
          tech: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "Javascript",
          },
          poster: "../images/web/calculator.png",
          preview: "../images/web/calculator.png",
        },
        {
          dialog: false,
          title: "Return of the Natural",
          demo: "https://returnofthenatural.com",
          tech: {
            tech1: "Wordpress",
            tech2: "Oxygen",
            tech3: "HTML",
            tech4: "CSS",
          },
          poster: "../images/web/returnofthenatural-website.png",
          preview: "../images/web/returnofthenatural-preview.png",
        },
        {
          dialog: false,
          title: "Resonant With World",
          tech: {
            tech1: "PHP",
            tech2: "SQL",
            tech3: "HTML",
            tech4: "CSS",
          },
          poster: "../images/web/resonantwithworld-website.png",
          preview: "../images/web/resonantwithworld-preview.png",
        },
        {
          dialog: false,
          title: "The Basta Group",
          git: "",
          demo: "https://thebastagroup.com",
          tech: {
            tech1: "HTML",
            tech2: "CSS",
            tech3: "MailChimp",
            tech4: "JavaScript",
          },
          poster: "../images/web/thebastagroup-website.png",
          preview: "../images/web/thebastagroup-preview.png",
        },
        {
          dialog: false,
          title: "Smart Study",
          git: "https://github.com/thebowenfeng/smart-study",
          demo: "https://smart-study-webapp.herokuapp.com/,",
          tech: {
            tech1: "React",
            tech2: "HTML",
            tech3: "CSS",
            tech4: "JavaScript",
          },
          poster: "../images/web/smartstudy.png",
          preview: "../images/web/smartstudy.png",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>
