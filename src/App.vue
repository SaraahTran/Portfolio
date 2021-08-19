<template>
  <v-app :dark="goDark">
    <v-content>
      <hr class="vline-r" />
      <hr class="vline-l" />
      <Socials />
      <v-container width="100%" align-center>
        <TheHeader :goDark="goDark" @changeTheme="updateTheme($event)" />

        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
:root {
  --primary-color: #a3a7ce !important;
  --secondary-color: #998578 !important;
  --tertiary-color: #ffffff !important;
  --success-color: #80b855 !important;
  --warning-color: #eaca44 !important;
  --error-color: #ef4d4d !important;
  font-family: "Gilroy", sans-serif;
}
</style>

<script>
import TheHeader from "./components/TheHeader";
import Socials from "./components/Socials";
import Home from "./views/Home";

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "Sarah Tran",
    meta: [
  { charset: "utf-8" },
      { property: "og:title", content: "Sarah Tran" },
      { property: "og:site_name", content: "Sarah Tran" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sarahtran.me" },
    ],
  },
  components: {
    TheHeader,
    Home,
    Socials,
  },
  data() {
    return {
      options: {
        keyboardScrolling: false,
        scrollbar: false,
        scrollOverflow: false,
        autoScrolling: false,
        menu: true,
        slidesNavigation: true,
        slidesNavPosition: "top",
        scrollBar: false,
        navigation: true,
        anchors: ["Home", "Resume", "Services", "Portfolio"],
      },
      goDark: false,
    };
  },

  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
    },
    beforeDestroy() {
      if (typeof this.api !== "undefined") {
        this.destroy();
      }
    },
  },
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
