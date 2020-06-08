<template>
  <div class="">
    <div class="home-banner">
      <div>Service Assignments</div>
    </div>
    <div class="work-details">
      <div class="left-side">
        <img src="@/assets/svc-assignments-example.png" id="image">
      </div>
      <div class="right-side">
        <div class="work-section">
          <div class="work-heading">overview</div>
          <p class="work-description">Service Assignments is a tool used by the general services department at the Missionary Training Center in Provo, Utah, and in other international MTCs.</p>
          <p class="work-description">This tool is used to assign incoming groups of missionaries a service assignment for their time in the MTC.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">problem</div>
          <p class="work-description">The Provo MTC had been giving one service assignment to each group that lasted their whole stay in the MTC. International MTCs were giving groups different assignments each week. The problem (started out as): They wanted one tool to accomodate both processes.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">users</div>
          <p class="work-description">The head of the General Services departement in Provo and a lot of unkown (that’s bad) users in international MTCs throughout the world.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">constraints</div>
          <p class="work-description">We had zero contact (one unanswered email that I sent) with the users from the international MTCs. This was quite unfortunate. Designing a tool for someone with barely any information is the worst - not a good way to do things - we did however, have to design something.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">process</div>
          <p class="work-description"></p>
          <p class="work-description"></p>
          <p class="work-description"></p>
          <p class="work-description"></p>
          <p class="work-description"></p>
          <p class="work-description"></p>
          <p class="work-description"></p>
        </div>
        <div class="work-section">
          <div class="work-heading">aftermath</div>
          <p class="work-description"></p>
          <p class="work-description"></p>
          <p class="work-description"></p>
        </div>
      </div>
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
  background-image: url('../assets/svc-assignments-bg-2.png');
  background-size: cover;
  background-attachment: fixed;
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
