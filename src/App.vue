<template>
  <div id="app">
    <Navbar/>
    <div class="content">
      <Home v-if="currentPage === 'home'"/>
      <Work v-if="currentPage === 'work'"/>
      <Contact v-if="currentPage === 'contact'"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

import { mapGetters } from 'vuex'

export default {
  components: {
    Navbar,
    Footer,
    Home,
    Work,
    Contact
  },
  computed: {
    ...mapGetters(['currentPage'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

html, body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.16em;
  text-transform: lowercase;
  color: #131313;
}
#app {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  background-color: #fafafa;
}
.content {
  margin-top: 60px;
  min-height: calc(100vh - 120px);
}
.home {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
}
.home-banner {
  position: relative;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-banner::after {
  content: ' ';
  position: absolute;
  height: calc(700px);
  top: -70px;
  bottom: 0;
  right: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateZ(-1px) scale(1.5);
  z-index: -1;
}
.static {
  position: relative;
  background-color: #fafafa;
}
@media (max-width: 767px) {
  .home-banner {
    height: 550px;
  }
}
</style>
