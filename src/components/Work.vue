<template>
  <div class="">
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

<style scoped>
</style>
