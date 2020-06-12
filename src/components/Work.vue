<template>
  <div>
    <MsnyAssignments v-if="workView === 'msnyAssignments'"/>
    <SvcAssignments v-if="workView === 'svcAssignments'"/>
    <TeachAssignments v-if="workView === 'teachAssignments'"/>
    <More v-if="workView === 'more'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const MsnyAssignments = require('@/components/MsnyAssignments.vue').default
const SvcAssignments = require('@/components/SvcAssignments.vue').default
const TeachAssignments = require('@/components/TeachAssignments.vue').default
const More = require('@/components/More.vue').default

export default {
  components: {
    MsnyAssignments,
    SvcAssignments,
    TeachAssignments,
    More
  },
  computed: {
    ...mapGetters(['workView'])
  }
}
</script>

<style>
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
  width: 100%;
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
@media (max-width: 767px) {
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
    position: absolute;
    top: calc(510px - ((100vw - 60px) * .638) / 2);
    left: 30px;
    width: calc(100vw - 60px);
  }
  .right-side {
    padding: 10px 30px;
  }
}
</style>
