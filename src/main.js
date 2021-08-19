import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import VueAnalytics from 'vue-analytics'
import AnimatedVue from 'animated-vue'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(AnimatedVue)





Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === "production"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(StoryblokVue)
Vue.use(VueAnalytics, {
  id: 'UA-139190314-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#A3A7CE",
        secondary: "#998578",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        lightblue: "#14c6FF",
        yellow: "#FFCF00",
        purple: "#A3A7CE",
        pink: "#FF1976",
        orange: "#FF8657",
        magenta: "#C33AFC",
        darkblue: "#1E2D56",
        gray: "#909090",
        neutralgray: "#9BA6C1",
        green: "#2ED47A",
        red: "#FF5c4E",
        darkblueshade: "#308DC2",
        lightgray: "#BDBDBD",
        lightpink: "#FFCFE3",
        white: "#FFFFFF"
      }
    }
  }
});