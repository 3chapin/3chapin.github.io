<template>
  <div class="">
    <div class="home-banner">
      <div>Missionary Assignments</div>
    </div>
    <div class="work-details">
      <div class="left-side">
        <img src="@/assets/msny-assignments-example.png" class="shadow-lg">
      </div>
      <div class="right-side">
        <h1>Caption</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.home-banner {
  background-color: #000707;
  background-image: url('../assets/msny-assignments-bg.png');
  background-size: cover;
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
.left-side > img {
  width: 100%;
}
.right-side {
  padding: 150px 90px 150px 30px;
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
  .left-side > img {
    position: absolute;
    top: 400px;
    left: calc((100vw - 85%) / 2);
    width: 85%;
  }
  .right-side {
    padding: 110px 20px 100px;
  }
}
</style>
