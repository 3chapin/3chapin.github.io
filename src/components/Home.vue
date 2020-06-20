<template>
  <div class="home">
    <div class="home-banner">
      <img src="../assets/home-header.png" class="d-none d-md-block" />
      <img src="../assets/home-header-mobile.png" class="d-block d-md-none" />
    </div>
    <div class="static profile">
      <img src="../assets/profile.png" class="profile-pic" />
      <div>i employ user-centered design to devise clean and elementary solutions while always listening to and focusing on user needs.</div>
    </div>
    <div class="static work text-center">
      <div class="work-header">check out some of my work</div>
      <b-row class="work-deck">
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card" @click="setCurrentPage('msnyAssignments')">missionary assignments</div>
        </b-col>
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card" @click="setCurrentPage('svcAssignments')">service assignments</div>
        </b-col>
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card inactive">teacher assignments<br>(under development)</div>
        </b-col>
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card inactive">more<br>(under development)</div>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapActions(['setCurrentPage'])
  }
}
</script>

<style scoped>
.home-banner::after {
  background-image: url('../assets/home-bg-2.png');
}
.home-banner > img {
  width: 88%;
}
.profile {
  padding: 170px 90px;
  display: flex;
  flex-direction: row;
  align-items: left;
}
.profile-pic {
  width: 167px;
  height: 172px;
  margin-right: 70px;
}
.profile > div {
  line-height: 40px;
  display: flex;
  align-items: center;
}
.work-header {
  padding: 17px 0 40px;
  font-size: 16px;
}
.work-deck {
  max-width: calc(100vw - 240px);
  margin: 0 auto calc((100vh - 318px) / 2);
}
.work-card {
  width: calc(100vw - 80px);
  max-width: 270px;
  border-radius: 16px;
  background-color: #131313;
  height: 234px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  cursor: pointer;
  transition: box-shadow .2s;
}
.work-card.inactive {
  color: #6b6b6b;
}
.work-card:hover {
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
}
@media (max-width: 1199px) {
  .work-deck {
    max-width: calc(100vw - 80px);
    margin-bottom: calc((100vh - 632px) / 2);
  }
  .work-card {
    max-width: 295px;
    margin-bottom: 25px;
  }
}
@media (max-width: 991px) {
  .work-deck {
    margin-bottom: 35px;
  }
}
@media (max-width: 767px) {
  .home-banner::after {
    background-position: center top -80px;
  }
  .home-banner > .caption {
    max-height: 225px;
    width: auto;
    margin-bottom: 100px;
  }
  .profile {
    padding: 76px 40px;
    text-align: left;
  }
  .profile-pic {
    position: fixed;
    width: 116px;
    height: 120px;
    top: calc(550px - 60px);
    left: calc(50% - 58px);
  }
  .profile > div {
    margin-top: 30px;
    letter-spacing: .13em;
    text-align: justify;
  }
}
</style>
