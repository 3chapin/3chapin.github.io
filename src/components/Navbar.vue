<template>
  <b-navbar toggleable="md" type="dark" fixed="top">
    <b-navbar-brand @click="setCurrentPage('home')">mjlowell</b-navbar-brand>
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          :class="{ 'active': currentPage === 'home' }"
          @click="setCurrentPage('home')"
        >home</b-nav-item>
        <b-nav-item
          :class="{ 'active': currentPage === 'work' }"
          @click="setPageAndWorkView()"
        >work</b-nav-item>
        <!-- <b-nav-item
          :class="{ 'active': currentPage === 'contact' }"
          @click="setCurrentPage('contact')"
        >contact</b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['currentPage'])
  },
  methods: {
    ...mapActions(['setCurrentPage', 'setWorkView']),
    setPageAndWorkView () {
      this.setCurrentPage('work')
      this.setWorkView('msnyAssignments')
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #131313;
  padding: 12px 73px;
}
a.nav-link {
  padding: 7px 17px !important;
}
a.nav-link:not(.active) {
  color: #6b6b6b;
}
.navbar-dark .navbar-nav .active > .nav-link {
  color: #fafafa !important;
}
.navbar-brand {
  font-size: 1rem;
  padding: 7px 17px;
  margin-right: 0;
  color: #fafafa !important;
}
.navbar-brand:hover {
  cursor: pointer;
}
.active {
  color: #fafafa !important;
}
.navbar-toggler {
  border: none !important;
  padding: 0 17px;
  font-size: 1rem;
}
@media (max-width: 992px) {
  .navbar {
    padding: 12px 12px;
  }
}
</style>
