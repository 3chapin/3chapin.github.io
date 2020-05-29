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
</style>
