<template>
  <div class="container">

    <div class="otp-input">
      <h1>Enter your One-Time Password (OTP)</h1>
      <otp 
        :digit-count="4"
        @update:otp="otpValue = $event"
      >
      </otp>
      <p>Your input otp number is: {{ otpValue }}</p>
    </div>

    <div class="otp-img">
      <img src="/src/assets/otp.png" alt="" srcset="">
    </div>

  </div>
  <div>
    <!-- <log-button title="Verify" /> -->
    <button>Verify</button>
  </div>
  


</template>

<script setup>
// import LogButton from '../UI/LogButton.vue';
import Otp from './OTP.vue'
import { ref } from "vue"

const otpValue = ref('')
</script> 

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    margin: -9px;
    height: 100%;
  }
  .otp-input {
    margin-top: 10%;
    margin-left: 5%;
  }

  h1 {
    width: 90%;
  }
  button {
    /* display: grid; */
    /* flex-direction: column-reverse; */
    position: relative;
    margin-left: 15%;
    top: -550px;
    background-color: #009688;
    color: white;
    padding: 15px 60px;
    border-radius: 10px;
    font-weight: 800;
    border: none;
    font-size: 20px;
  }

  .otp-img {
    background-color:  #009688;
    border-radius: 100px 0px 100px 0px;
    padding: 0;
    top: 0;
    margin-top: 0px;
    height: 1000px;
    margin-right: -90px;
    padding: 0px 100px;
  }
  img {
    width: 600px;
  }

</style>
