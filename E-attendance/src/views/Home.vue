<template>
  <nav-bar />

  <div class="content">
    <div class="home-info">
      <home-info />
    </div>

    <div class="img-space">
      <img src="../assets/homepage.png" alt="" srcset="">
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/UI/NavBar.vue';
import HomeInfo from '@/components/UI/HomeInfo.vue';

  export default {
    name: 'home',
    components: {
      NavBar,
      HomeInfo
    },
  };
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
    padding: 5px 50px;
    /* width: 1px; */
    /* overflow: hidden; */
    /* margin: auto; */
  }
  .home-info {
    width: 900px;
  }

  .img-space {
    margin-top: -80px;
  }
  img {
    width: 700px;
  }
</style>