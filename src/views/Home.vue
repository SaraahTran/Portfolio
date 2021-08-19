<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <hr class="vline" />

    <!--Home-->
    <div class="section" id="Home" animate__fadeIn>
      <v-container grid-list-md text-xs-left is-animated>
        <v-layout row wrap>
          <v-flex xs6>
            <v-card flat color="transparent" max-width="500">
              <v-card-title primary-title>
                <div>
                  <v-typer>Hi my name is</v-typer>
                  <h1 class="text-uppercase display-3">
                    <span>Sarah </span>
                    <span class="purple--text font-weight-bold">Tran</span>
                  </h1>
                  <div>
                    <vue-typed-js
                      :strings="['design', 'develop', 'make websites']"
                    >
                      <p class="text-sm-body-2">
                        I like to
                        <span
                          class="font-weight-bold overline purple--text typing"
                        ></span>
                      </p>
                    </vue-typed-js>
                  </div>
                </div>
              </v-card-title>

              <v-card-actions class="hidden-md-and-up justify-center">
                <v-btn
                  v-for="icon in icons"
                  :key="icon.icon"
                  small
                  fab
                  dark
                  outline
                  color="#A3A7CE"
                  :href="icon.href"
                  target="_blank"
                >
                  <v-icon dark>{{ icon.icon }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs6 order-xs="first">
            <transition name="fade">
              <v-img
                class="ml-auto"
                src="/images/self-portrait-no-glasses.png"
                max-width="250"
              ></v-img>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!--Other Sections-->

    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </full-page>
</template>

<script>
import FullPage from "vue-fullpage.js/src/FullPage.vue";
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";
import About from "./About.vue";
import Skills from "./Skills.vue";
import Portfolio from "./Portfolio/Portfolio.vue";
import Contact from "./Contact.vue";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "Sarah Tran",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Sarah Tran's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },
      { property: "og:description", content: "Sarah Tran's Portfolio" },
    ],
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage,
    FullPage,
    About,
    Portfolio,
    Skills,
    Contact,
  },
  data() {
    return {
      options: {
        scrollBar: false,
        scrollOverflow: true,
        click: true,
        navigation: true,
        responsiveWidth: 800,
        anchors: ["Home", "About", "Skills", "Portfolio", "Contact"],
      },

      icons: [
        { href: "https://github.com/SaraahTran", icon: "fab fa-github" },
        {
          href: "https://www.facebook.com",
          icon: "fab fa-facebook-f",
        },
        {
          href: "https://www.linkedin.com",
          icon: "fab fa-linkedin",
        },
        {
          href: "https://www.behance.net/sarahtran1",
          icon: "fab fa-behance",
        },
      ],
      text1: ["Front-End Developer", "Web Developer", "Web Designer"],
      leftImage: "https://i.imgur.com/bU50uS9.jpg",
      rightImage: "https://i.imgur.com/z3ZoEEw.jpg",
      leftImage2: "https://i.imgur.com/SXBitjh.jpg",
      rightImage2: "https://i.imgur.com/Dcz2PGx.jpg",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5,
    };
  },
};
</script>
<style>
#app {
  font-family: "Gilroy", sans-serif;
  color: #5c5651;
}

vue-typed-js {
  font-size: 10px !important;
  color: grey;
}

.vline {
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  margin: 0;
  border: none;
  border-right: solid 1px #d8d8d8;
}

.vline-r {
  position: fixed;
  top: 0;
  right: 29px;
  bottom: 0;
  margin: 0;
  border: none;
  border-left: solid 1px #d8d8d8;
}

.vline-l {
  position: fixed;
  top: 0;
  left: 29px;
  bottom: 0;
  margin: 0;
  border: none;
  border-right: solid 1px #d8d8d8;
}

@media screen and (max-width: 1000px) {
  hr {
    display: none;
  }
}

#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: lightgrey;
  height: 7px;
  width: 7px;
}

#fp-nav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span {
  background: var(--primary-color);
}

.primary--text {
  color: var(--primary-color);
}
.about {
  max-width: 100% !important;
}

.purple--text {
  color: var(--primary-color) !important;
}

.secondary--text {
  color: var(--secondary-color);
}

@media screen and (max-width: 700) {
  .flex.xs6 {
    flex-basis: 100% !important;
  }
}

@media screen and (min-width: 0) {
  .flex.xs6 {
    max-width: 100% !important;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
}
</style>

