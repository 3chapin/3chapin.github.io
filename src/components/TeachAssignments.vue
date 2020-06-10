<template>
  <div class="">
    <div class="home-banner">
      <div>under development</div>
    </div>
    <PrevNextBtns/>
    <div class="work-details">

    </div>
    <PrevNextBtns/>
  </div>
</template>

<script>
export default {
  // mounted () {
  //   let image = document.querySelector('#image')
  //   window.addEventListener('scroll', () => {
  //     let width = window.innerWidth
  //     let imageWidth = (width / 2) - 120
  //     let halfHeight = (window.innerHeight - 62) / 2
  //     let halfImageHeight = (imageWidth * .638) / 2
  //     if (width > 767) {
  //       let startFixedPosition = 850 - (halfHeight - halfImageHeight)
  //       if (window.scrollY > startFixedPosition) {
  //         image.style.position = 'fixed'
  //         image.style.top = `${ halfHeight - halfImageHeight + 62 }px`
  //         image.style.width = `${ imageWidth }px`
  //       } else {
  //         image.style.position = 'static'
  //         image.style.width = `${ imageWidth }px`
  //       }
  //     } else {
  //       image.style.position = 'absolute'
  //       image.style.top = `${ 510 - ((width - 60) * .638) / 2 }px`
  //       image.style.width = `${ width - 60 }px`
  //     }
  //   })
  // }
}
</script>

<style scoped>
.home-banner {
  /* background-image: url('../assets/msny-assignments-bg.png'); */
}
</style>
