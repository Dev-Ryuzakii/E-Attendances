<script>
import SignUp from './components/Admin/SignUp.vue'
import SignIn from './components/Lecturer/SignIn.vue';

export default {
  components: {
    SignUp,
    SignIn
  },

  data() {
    return {

    }
  }
}
</script>

<template>
  <h1>Hello world</h1>
  <hr>
  <sign-up />
  <sign-in />
  
</template>

<style>

</style>
