<template>
  <div class="">
    <div class="home-banner">
      <div>This page is currently in development</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    let image = document.querySelector('#image')
    window.addEventListener('scroll', () => {
      let width = window.innerWidth
      let imageWidth = (width / 2) - 120
      let halfHeight = (window.innerHeight - 62) / 2
      let halfImageHeight = (imageWidth * .638) / 2
      if (width > 767) {
        let startFixedPosition = 850 - (halfHeight - halfImageHeight)
        if (window.scrollY > startFixedPosition) {
          image.style.position = 'fixed'
          image.style.top = `${ halfHeight - halfImageHeight + 62 }px`
          image.style.width = `${ imageWidth }px`
        } else {
          image.style.position = 'static'
          image.style.width = `${ imageWidth }px`
        }
      } else {
        image.style.position = 'absolute'
        image.style.top = `${ 510 - ((width - 60) * .638) / 2 }px`
        image.style.width = `${ width - 60 }px`
      }
    })
  }
}
</script>

<style scoped>
.home-banner {
  background-color: #000707;
  /* background-image: url('../assets/msny-assignments-bg.png'); */
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center top 26px;
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
  font-size: 38px;
  letter-spacing: .04em;
  text-transform: lowercase;
  color: #fafafa;
}
.work-details {
  display: flex;
}
.left-side, .right-side {
  flex: 1;
}
.left-side {
  padding: 150px 30px 150px 90px;
}
.left-side > img{
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}
#image {
  width: 100%;
  border-radius: 4px;
}
.right-side {
  padding: 140px 90px 10px 30px;
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
}
@media (max-width: 767px) {
  .home-banner {
    height: 450px;
  }
  .home-banner > div {
    margin-left: 20px;
  }
  .left-side {
    flex: 0;
    padding: 0;
  }
  #image {
    position: absolute;
    top: calc(510px - ((100vw - 60px) * .638) / 2);
    left: 30px;
    width: calc(100vw - 60px);
  }
  .right-side {
    padding: calc(((100vw * .638)) / 2 + 100px) 30px 10px;
  }
}
</style>
