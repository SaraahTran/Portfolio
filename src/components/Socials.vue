<template>
  <v-card
    max-width="600"
    class="mx-auto"
    vertical
    color=transparent
    flat
  >

<div class="mf-social-side-list">
  <ul>
  <li>
   <a href="https://www.facebook.com/profile.php?id=100009191550386" target="_blank"><i class="fab fa-facebook-f"></i></a>
  </li>

  <li>
  <a href="https://www.behance.net/sarahtran1" target="_blank"><i class="fab fa-behance"></i></a>
   </li>
            
   <li>
  <a href="https://linkedin.com/saraahtran" target="_blank"><i class="fab fa-linkedin"></i></a>
  </li>
  
  <li>
  <a href="https://github.com/SaraahTran" target="_blank"><i class="fab fa-github"></i></a>
  </li>
  
  <li>
  <a href="mailto:stsarahtran@gmail.com" target="_blank"><i class="far fa-envelope"></i></a>
  </li>
            
 </ul>
</div>
  </v-card>
</template>


<style>

/*Social Media Left Side*/
.mf-social-side-list {
  position: fixed;
  background-attachment: fixed;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow: visible;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
  top: 0px;
  height: 100vh;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  justify-content: center;
}

.mf-social-side-list ul {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 0;
  margin: 0;
  left: 13px;
  position: relative;
  position: fixed;
  background-attachment: fixed;
}

.mf-social-side-list ul li a {
  color: #ffffff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  line-height: 35px;
  margin-top: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  position: relative;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.mf-social-side-list ul li a:hover {
  opacity: .9;
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
  position: relative;
  background: #eaebf5;
  cursor: pointer;
}

.mf-social-side-list ul li a {
  background: white;
  color: #A3A7CE;
  z-index: 100;
  border: 1px solid #A3A7CE;
  position: relative;
}

@media screen and (max-width: 1000px){
    .mf-social-side-list {
        display: none;
    }
}


</style>


<script>

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
          href: "https://www.facebook.com/profile.php?id=100009191550386",
          icon: "fab fa-facebook-f",
        },
        {
          href: "https://www.linkedin.com/saraahtran",
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
