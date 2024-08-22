<script>
export default {
  props: {
    title: String
  },

  data() {
    return {
      // msg: props,
    }
  }
}
</script>

<template>
  <div>
    <button >{{  title }}</button>
  </div>
</template>

<style scoped>
  div{
    margin: 10px 10px;
 }
  button {
    width: 62%;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 0px;
    background-color: #009688;
    color: white;
    border-radius: 5px;
    border: none;
  }
</style>

