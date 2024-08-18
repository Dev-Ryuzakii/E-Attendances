<script>
import Button from './Button.vue';

export default {
  components: {
    Button
  },

  data() {

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

      <label for="">
        <input type="checkbox" name="" id="checkbox">
        <p>I agree with the <a href="#">Term</a> & <a href="#">Condition</a></p>
      
        
      </label>


      
      <div>
        <Button title="Sign Up" />
        <p>Have an account? <a href="">login</a></p>
        <h4>or</h4>

      </div>
    </div>

    <div>
      <img src="" alt="">
    </div>
  </div>
</template>

<style scoped>
 .container {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background-color: #D4D4D4;
  padding: 30px 10px;
  opacity: 90%;
 }

 .text-field {
  padding: 20px 40px;
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
  width: 40%;
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

 input #checkbox {
  display: none;
  width: 0;
  margin: 0;
  display: flex;
  /* height: 20px; */
  /* justify-content: space-around; */
 }
</style>