<template>
  <div class="static btn-container">
    <b-button variant="link" class="prevBtn topBtn text-decoration-none" @click="changeCurrentPage(-1)" :disabled="currentPage === 'msnyAssignments'">Previous</b-button>
    <b-button variant="link" class="nextBtn topBtn text-decoration-none" @click="changeCurrentPage(1)" :disabled="currentPage === 'more'">Next</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['currentPage'])
  },
  methods: {
    ...mapActions(['setCurrentPage']),
    changeCurrentPage (n) {
      const viewArray = ['msnyAssignments', 'svcAssignments', 'teachAssignments', 'more']
      let current = viewArray.indexOf(this.currentPage)
      this.setCurrentPage(viewArray[current + n])
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
