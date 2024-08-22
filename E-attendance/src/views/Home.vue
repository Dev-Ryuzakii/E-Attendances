<template>
  <nav-bar />

  <div class="content">
    <div>
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
    padding: 5px 20px;
  }

  .img-space {
    margin-top: -80px;
  }
  img {
    width: 700px;
    

  }
</style>