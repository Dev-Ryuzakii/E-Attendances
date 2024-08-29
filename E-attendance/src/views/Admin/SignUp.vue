<script>
import image from '/src/assets/signup-img-p.png'
import LogButton from '@/components/UI/LogButton.vue';

export default {
  components: {
    LogButton
  },

  data() {
    return {
      image: image,
    }
  }
}
</script>

<template>
  <!-- <img src="/src/assets/EduAttend.png" :style=" { width: '200px', height: '150px'} " alt="" srcset=""> -->
  <div class="container">
    <img src="../assets/homepage.png" class="logo" alt="" srcset="">
    <div class="text-field">
      <label for="">
        <b>Full Name</b>
        <input type="text" placeholder="Enter your full name" required>
      </label>

      <label for="">
        <b>E-mail</b>
        <input type="email" placeholder="Enter your full name" required>
      </label>

      <label for="">
        <b>Password</b>
        <input type="number" class="special"  placeholder="Enter your password" required>
      </label>

      <label for="">
        <b>Confirm Password</b>
        <input type="number" class="special" placeholder="Enter your password again" required>
      </label>

      <div class="checkin">
          <div>
            <input type="checkbox" name="" id="checkbox">
          </div>

          <div>
            <p>I agree with the <a href="#">Term</a> & <a href="#">Condition</a></p>
          </div>
      </div>
        
      
      <div class="bottom">
        <log-button title="Sign Up" />
        <p>Have an account? <a href="">login</a></p>
        <h5>or</h5>
      </div>
      
    </div>

    <div class="img-space">
      <img :src="image" />
    </div>
  </div>
</template>

<style scoped>
 .container {
  display: flex;
  justify-content: space-between;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: #F5F5F5;
  padding: 0px 40px;
  opacity: 90%;
  width: 99%;
 }
 .logo img {
  position: absolute;
  width: 100px;
  /* height: 50px */
 }

 .text-field {
  margin-top: 50px;
  padding: 70px 0px;
  width: 900px;
 }

 .text-field label {
  margin: 10px 10px;
  display: block;
 }

 .text-field label b {
  width: 100%;
  display: block;
 }

 .text-field label input {
  background-color: #D4D4D4;
  color: black;
  width: 60%;
  border-radius: 5px;
  padding: 10px 10px;
  border: 1px solid black;
 }

 input.special {
  background-color: white;
 }

 .text-field label input:focus {
  background-color: white;
 }
 .text-field label input::placeholder {
  color: black;
 }

 .checkin {
  display: flex;
  align-items: center
 }

 .img-space {
  background-color:  #009688;
  border-radius: 100px 0px 100px 0px;
  padding: 0;
  top: 0;
  margin-top: -10px;
  height: 1500px;
  margin-right: -90px;
  padding: 20px 60px;
 }

 .img-space img {
  width: 700px;
 }
 .bottom h5 {
  display: flex;
  flex-direction: row;
  padding: 0px 320px 0px 0px;
  color: grey;
  font-weight: 200;
  font-size: 15px;
}
.bottom h5:before, h5:after{
  content: '';
  flex: 1 1;
  border-bottom: 1px solid;
  height: 10px;
  margin: 0px 5px;
}
</style>