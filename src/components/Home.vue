<template>
  <div class="home">
    <div class="home-banner">
      <img src="../assets/home-header.png" class="caption d-none d-md-block" />
      <img src="../assets/home-header-mobile.png" class="caption d-block d-md-none" />
    </div>
    <div class="profile">
      <img src="../assets/profile.png" class="profile-pic" />
      <div>i employ user-centered design to devise clean and elementary solutions while always listening to and focusing on user needs.</div>
    </div>
    <div class="work text-center">
      <div class="work-header">check out some of my work</div>
      <b-row class="work-deck">
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card">missionary assignments</div>
        </b-col>
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card">service assignments</div>
        </b-col>
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card">evaluation manager</div>
        </b-col>
        <b-col cols="12" lg="6" xl="3" class="d-flex justify-content-center align-items-center">
          <div class="work-card">more</div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-banner {
  background-image: url('../assets/home-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-banner > .caption {
  width: 88%;
}
.profile {
  padding: 170px 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profile-pic {
  width: 120px;
  height: 120px;
  margin-right: 70px;
}
.profile > div {
  line-height: 40px;
}
.work-header {
  margin: 17px 0 40px;
  font-size: 18px;
}
.work-deck {
  max-width: calc(100vw - 240px);
  margin: 0 auto 246px;
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
}
@media (max-width: 1199px) {
  .work-deck {
    max-width: calc(100vw - 80px);
  }
  .work-card {
    max-width: 295px;
    margin-bottom: 25px;
  }
}
@media (max-width: 767px) {
  .home-banner {
    height: 450px;
  }
  .home-banner > .caption {
    max-height: 225px;
    width: auto;
    margin-bottom: 100px;
  }
  .profile {
    padding: 76px 40px;
    text-align: justify;
  }
  .profile-pic {
    position: absolute;
    top: calc(512px - 60px);
    left: calc(50% - 60px);
  }
  .work-deck {
    margin-bottom: 230px;
  }
  .work-card {
  }
}
</style>
