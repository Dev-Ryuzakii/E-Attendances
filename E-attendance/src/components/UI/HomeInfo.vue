<script>
import LogButton from '@/components/UI/LogButton.vue';


export default {
  components: {
    LogButton
  }
}
</script>

<template>
  <div>
    <h2><i>E-Attendance</i></h2>
    <h4><b>Attendance Managemet Solution</b></h4>
    <p>A streamlined platform for digitizing 
      and simplifying <br> attendance tracking 
      across educational institutions...
    </p>

    <div :style="{ width: '300px'}">
      <log-button title="Get Started" />
    </div>

</div>
</template>

<style scoped>
  div {
    display: grid;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 800;
    padding: 55px 20px
  }
  h2 {
    font-size: 45px;
    margin: 2px 0px;
  }
  h4 {
    font-size: 30px;
    margin: 10px 0px;
  }
  p {
    font-weight: 200;
    line-break:normal;
    margin: 0px 0px;
  }

</style>

