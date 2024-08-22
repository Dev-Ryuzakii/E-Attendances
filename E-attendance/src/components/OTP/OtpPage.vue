<template>
  <div class="container">

    <div class="otp-input">
      <h1>Enter your one-Time Password (OTP)</h1>
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
  

</template>

<script setup>
import Otp from './OTP.vue'
import { ref } from "vue"

const otpValue = ref('')
</script> 

<style>
  .container {
    display: flex;
    justify-content: space-between;
    margin: -9px;
    height: 100%;
  }
  .otp-input {
    /* height: 100vw; */
    margin-top: 15%;
    margin-left: 5%;
  }

  h1 {
    width: 90%;
  }

  .otp-img {
    background-color: #009688;
    display: center;
    border-radius: 180px 0px 0px 0px;
    /* height: 750px; */
    margin-left: -90px;
    /* align-items: center; */
    padding: 80px 100px 0px 150px;
  }
  img {

    width: 600px;
  
  }
</style>
