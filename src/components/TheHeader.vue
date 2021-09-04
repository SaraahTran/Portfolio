<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary app width="150" height="340">
      <v-list class="pt-4">
        <v-list-tile active-class="purple--text" link="/">
          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" href="#About">
          <v-list-tile-content>
            <v-list-tile-title>ABOUT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="#Skills">
          <v-list-tile-content>
            <v-list-tile-title>SKILLS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile active-class="green--text" to="#Portfolio">
          <v-list-tile-content>
            <v-list-tile-title>PORTFOLIO</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed flat dense color="transparent" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span class="font-weight-light">Sarah</span>
        <span class="font-weight-bold purple--text">Tran</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" depressed small icon class="hidden-md-and-up">
        <v-icon v-if="goDark==true">fas fa-sun</v-icon>
        <v-icon v-else>fas fa-moon</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to href="/" active-class="green--text headline">Home</v-btn>
        <v-btn  flat to href="/#About" active-class="green--text headline">About</v-btn>
        <v-btn flat to href="/#Skills" active-class="green--text headline">Skills</v-btn>
        <v-btn flat to href="/#Portfolio" active-class="green--text headline">Portfolio</v-btn>
       
        <v-btn @click="changeTheme" depressed small icon>
          <v-icon v-if="goDark==true">fas fa-sun</v-icon>
          <v-icon v-else>fas fa-moon</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    
  </div>




</template>

<style>
.v-btn__content{
letter-spacing: 2px!important;
margin-right: 2px!important;

}

.v-toolbar__items{
margin-right: 5px!important;
}


</style>

<script>


export default {


  props: {
    goDark: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    changeTheme() {
      this.$emit("changeTheme", this.goDark);
    }
  }
  
  
};
</script>

<style >
</style>
