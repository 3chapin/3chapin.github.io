<template>
  <div style="height: 100%;">
    <div class="coming"></div>
    <div class="overlay">
      <div class="line">
        <div class="term-init">$</div>
        <div>system reboot in progress...</div>
      </div>
      <div class="line">
        <div class="term-init">$</div>
        <div>system will be available in {{ counter.days }} days {{ counter.hours }} hours {{ counter.minutes }} minutes {{ counter.seconds }} seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data () {
    return {
      counter: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  methods: {
    countdown () {
      let d = new Date()
      let releaseDate = new Date('2020-06-15').setHours(24)
      let diff = releaseDate - d
      let days = diff / 86400000
      this.counter.days = parseInt(days)
      let hours = (days - parseInt(days)) * 24
      this.counter.hours = parseInt(hours)
      let minutes = (hours - parseInt(hours)) * 60
      this.counter.minutes = parseInt(minutes)
      let seconds = (minutes - parseInt(minutes)) * 60
      this.counter.seconds = parseInt(seconds)
    }
  },
  mounted () {
    window.setInterval (this.countdown, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coming {
  background-image: url('../assets/name-plus-cycle.svg');
  background-repeat: no-repeat;
  background-position: center right 0;
  background-size: 95%;
  height: 100%;
}
.overlay {
  box-sizing: border-box;
  font-family: monospace;
  padding: 20px 16px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .5);
}
.line {
  display: flex;
}
.term-init {
  margin-right: 12px;
}
@media (max-width: 800px) {
  .coming {
    background-image: url('../assets/name-plus-cycle-mobile.svg');
    background-size: 90%;
  }
}
</style>
