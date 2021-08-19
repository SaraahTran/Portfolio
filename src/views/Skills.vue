<template>
  <div class="section">
    <v-container grid-list-md>
      <v-layout row justify-center align-center wrap class="mt-4 pt-2 px-0">
        <v-flex xs12 sm12 md6 lg6 xl6>
          <v-container text-xs-left><v-card flat color=transparent>
            <h1 class="display-2 text-uppercase px-0">
              <span>My </span>
              <span class="purple--text font-weight-bold">Skills</span>
            </h1></v-card></v-container
          >
          <div>
            <v-card
              max-width="450"
              grid-list-md
              flat
              color="transparent"
              outlined
              text-xs-center
              class="align-center my-3 px-2 py-2 md-3 m-4"
            >
              <v-card-title class="xs-center px-0 headline font-weight-bold">
                Web
              </v-card-title>

              <br />

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    fab
                    icon
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-html5</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">HTML </span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    icon
                    fab
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-css3</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">CSS </span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    icon
                    fab
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-sass</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">SASS/SCSS </span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    icon
                    outline
                    depressed
                    text
                    fab
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-js</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">Javascript </span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    icon
                    fab
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-vuejs</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">Vue.js </span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    icon
                    fab
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-react</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">React</span>
              </v-tooltip>
            </v-card>

            <v-card
              max-width="450"
              text-xs-center
              flat
              color="transparent"
              outlined
              shaped
              tile
              class="align-center my-3 px-3 py-2 md-3 m-4 justify-center"
            >
              <v-card-title class="xs-center px-0 headline font-weight-bold">
                Design
              </v-card-title>

              <br />

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    fab
                    dark
                    icon
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-adobe</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip"
                  >Adobe Photoshop<br />
                  Adobe Illustrator<br />
                  Adobe InDesign<br />
                  Adobe XD
                </span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    icon
                    fab
                    outline
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-figma</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">Figma</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#A3A7CE"
                    round
                    dark
                    outline
                    fab
                    icon
                    target="_blank"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>fab fa-sketch</v-icon>
                  </v-btn>
                </template>
                <span class="tooltip">Sketch</span>
              </v-tooltip>
            </v-card>
          </div>
        </v-flex>

        <v-flex s12 sm12 md6 lg6 xl6>
          <v-img
            class="ml-auto"
            src="/images/desktop.png"
            max-width="250"
          ></v-img>
        </v-flex> </v-layout
    ></v-container>
  </div>
</template>

<style>
.tooltip {
  letter-spacing: 0px !important;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Skills",
    titleTemplate: "Skills",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End",
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },
      {

      },
      {
        property: "og:description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End",
      },
    ],
  },
  data() {
    return {
      icons: [
        { icon: "fab fa-html5" },
        {
          icon: "fab fa-css3",
        },
        { icon: "fab fa-js" },
        { icon: "fab fa-twitter" },
      ],

      cards: [
        {
          title: "Web Development",
          text: "html5",
          flex: 2,
        },
        {
          title: "Design",
          flex: 2,
        },
      ],

      skills: [{ icon: "fab fa-github" }],
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      buffer7: 0,
      buffer8: 0,
      buffer9: 0,
      buffer10: 0,
      buffer11: 0,
      buffer12: 0,
      bufferValue: 100,
      interval: 0,
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 90;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 80;
        this.buffer5 = 90;
        this.buffer6 = 90;
        this.buffer7 = 70;
        this.buffer8 = 70;
        this.buffer9 = 70;
        this.buffer10 = 20;
        this.buffer11 = 70;
        this.buffer12 = 70;
      }, 800);
    },
  },
};
</script>
<style >
</style>

