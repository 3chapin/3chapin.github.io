<template>
  <div id="app">
    <Navbar/>
    <div class="content">
      <Home v-if="currentPage === 'home'"/>
      <MsnyAssignments v-if="currentPage === 'msnyAssignments'" />
      <SvcAssignments v-if="currentPage === 'svcAssignments'" />
      <TeachAssignments v-if="currentPage === 'teachAssignments'" />
      <Contact v-if="currentPage === 'contact'"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
  padding-top: 58px;
  height: 100vh;
}
.home {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
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
  top: -82px;
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
.home-banner > div {
  margin-bottom: 115px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 80px;
  letter-spacing: .08em;
  text-transform: lowercase;
  color: #fafafa;
}
.work-details {
  display: flex;
  padding-top: 50px;
  margin-bottom: -50px;
}
.left-side, .right-side {
  flex: 1;
}
.left-side {
  padding: 0 30px 0 90px;
}
.left-side > img{
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}
#image {
  width: calc(100vw / 2 - 120px);
  border-radius: 4px;
}
.right-side {
  padding: 0 90px 0 30px;
}
.work-section {
  margin-bottom: 90px;
}
.work-heading {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  text-transform: lowercase;
  margin-bottom: 10px;
}
.work-description {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: .06em;
  text-transform: none;
  margin-bottom: 30px;
  text-align: justify;
}
.before-prev-next {
  height: 0;
  background-color: #fafafa;
}
@media (max-width: 767px) {
  .home-banner {
    height: 550px;
  }
  .home-banner > div {
    margin-left: 20px;
  }
  .left-side {
    flex: 0;
    padding: 0;
  }
  .work-description {
    text-align: left;
  }
  #image {
    position: fixed;
    top: calc(550px - ((100vw - 60px) * .638) / 2);
    left: 30px;
    width: calc(100vw - 60px);
  }
  .right-side {
    padding: 10px 30px;
  }
  .before-prev-next {
    height: 100px;
  }
}
</style>
