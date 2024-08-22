<script>
import Button from '../UI/Button.vue';
import image from '/src/assets/signup-img-p.png'

export default {
  components: {
    Button
  },

  data() {
    return {
      image: image,
    }
  }
}
</script>

<template>
  <div class="container">
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
        <Button title="Sign Up" />
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
  background-color: #D4D4D4;
  padding: 30px 40px;
  opacity: 90%;
 }

 .text-field {
  padding: 70px 0px;
  width: 900px
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
  /* margin: 0; */
  padding: 0;
  top: 0;
  margin-top: -35px;
  /* background-image: url('/E-attendance/src/assets/signup-img-p.png'); */
  /* background-repeat: no-repeat; */

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