<template>
  <div class="btn-container">
    <b-button variant="link" class="prevBtn topBtn text-decoration-none" @click="changeWorkView(-1)" :disabled="workView === 'msnyAssignments'">Previous</b-button>
    <b-button variant="link" class="nextBtn topBtn text-decoration-none" @click="changeWorkView(1)" :disabled="workView === 'more'">Next</b-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['workView'])
  },
  methods: {
    changeWorkView (n) {
      const viewArray = ['msnyAssignments', 'svcAssignments', 'teachAssignments', 'more']
      let current = viewArray.indexOf(this.workView)
      this.$store.dispatch('setWorkView', viewArray[current + n])
    }
  }
}
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: space-between;
  padding: 31px 78px;
}
.btn-link {
  color: #131313 !important;
  text-transform: lowercase;
  letter-spacing: .16em;
}
.btn-link:disabled, .btn-link.disabled {
  color: #fafafa !important;
}
.btn-link:hover {
  color: #131313 !important;
}
@media (max-width: 767px) {
  .btn-container {
    padding: 31px 18px 31px;
  }
}
</style>
