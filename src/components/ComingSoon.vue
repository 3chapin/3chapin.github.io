<template>
  <div class="coming">
    <div class="images">
      <img src="@/assets/name-plus-cycle.svg" style="width: 100%">
    </div>
    <div class="message">
      $ system reboot in progress...<br>$ system will be available in {{ counter.days }} days {{ counter.hours }} hours {{ counter.minutes }} minutes {{ counter.seconds }} seconds
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
      let releaseDate = new Date('2020-06-15')
      releaseDate.setHours(24)
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.images {
  width: calc(100% - 70px);
  margin-left: 70px;
}
.message {
  font-family: monospace;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  margin: 150px 0 0 70px;
  text-align: left;
}
</style>
