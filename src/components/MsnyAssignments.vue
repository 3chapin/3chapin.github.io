<template>
  <div class="">
    <div class="home-banner">
      <div>Missionary Assignments</div>
    </div>
    <div class="work-details">
      <div class="left-side">
        <img src="@/assets/msny-assignments-example.png" class="shadow" id="image">
      </div>
      <div class="right-side">
        <div class="work-section">
          <div class="work-heading">overview</div>
          <p class="work-description">Missionary Assignments is a tool used by the scheduling department at the Missionary Training Center in Provo, Utah.</p>
          <p class="work-description">This tool is used to assign all pertinent information to incoming missionaries - companions, classrooms, residence rooms etc. This tool was almost a carbon copy of the tool from a legacy app. This page had never been designed and it had gone on long enough.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">problem</div>
          <p class="work-description">There were hundreds of very data saturated rows with a small view area because of the data filters above the table. The data entry itself was clunky and not intuitive.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">users</div>
          <p class="work-description">The two main employees in the scheduling department.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">constraints</div>
          <p class="work-description">Since this was such a high priority - time was of the essence. We had limited discovery and research time which you sometimes have to deal with.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">process</div>
          <p class="work-description">We met with our PM and he gave us a run down of the basic requirements; what their goals were and what their workflow/process is like. Once we recieved a general understanding of their process, their goals and their struggles - our team (the lead designer and one other designer) started brainstorming possible solutions.</p>
          <p class="work-description">To help free up more vertical space on the page we decided to try and incorporate all of our filters in the table component itself. We also reduced the row height - they were unnecessarily tall - which allowed for more rows to be in view at a time.</p>
          <p class="work-description">Next, to simplify data entry we wanted to use our autocomplete dropdowns to allow users to make single assignments more quickly.</p>
          <p class="work-description">Since there were use cases for both single assignments and bulk assignments, we also implemented a modal to allow for bulk data entry.</p>
          <p class="work-description">My co-worker took the task of inserting filters into the table component - he worked up some sketches and ideas and tech reviewed with developers to talk about feasability.</p>
          <p class="work-description">I worked on the table re-design - starting with the reduction of row height - adding color bars to help distinguish between elders and sisters at a glance - adding the dropdowns in row and working with developers on feasability.</p>
          <p class="work-description">During this process we met with the users in the Scheduling department to test our prototypes - we were able to discover some other details about their process - and we adjusted our designs to meet those needs.</p>
        </div>
        <div class="work-section">
          <div class="work-heading">aftermath</div>
          <p class="work-description">After a few times going back and forth with them we had a product that they were going to be able to use and that would eliminate the biggest pain points from their previous tool.</p>
          <p class="work-description">The product wasn’t perfect - but it was definitely an improvement on what they had been using. We recieved positive feedback from them after the tool had been released and we new it had made their lives easier.</p>
          <p class="work-description">Looking back I wish we had more time to brainstorm new ideas - we were on a tight schedule and we provided the best solution within that time frame. One big challenge in design is finding a balance between taking enough time, but not too much time to create solutions.</p>
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
  background-image: url('../assets/msny-assignments-bg.png');
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
