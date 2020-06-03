<template>
  <div class="">
    <div class="msny-assignments" v-if="workView === 'msnyAssignments'">
      <div class="home-banner">
        <div>Missionary Assignments</div>
      </div>
      <div class="overview-header">
        <img src="../assets/msny-assignments-example.png"/>
        <div>Overview</div>
      </div>
    </div>
    <div class="svc-assignments" v-if="workView === 'svcAssignments'">
      Service Assignments
    </div>
    <div class="teach-assignments" v-if="workView === 'teachAssignments'">
      Teacher Assignments
    </div>
    <div class="more" v-if="workView === 'more'">
      More
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['workView'])
  }
}
</script>

<style scoped>
.home-banner {
  background-color: #000707;
  background-image: url('../assets/msny-assignments-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-banner > div {
  margin-bottom: 115px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  letter-spacing: .04em;
  text-transform: lowercase;
  color: #fafafa;
}
.overview-header > img{
  margin-top: 150px;
  margin-left: 90px;
  width: 630px;
  height: 403px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.25);
}
.overview-header > div{
  margin-top: 140px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  letter-spacing: .04em;
  text-transform: lowercase;
}
</style>
