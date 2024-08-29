<script>
export default {
  
}
</script>

<template>
  <nav>
    <div class="logo-space">
      <img src="/src/assets/EduAttend.png" alt="" srcset="">
    </div>

    <div class="link-space">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Product</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    font-size: large;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-bottom: 20px;
    margin-top: -10px;
    width: 100%;
    background-color: #009688;
    color: white;
    margin-left: -10px;
    align-items: center;
    padding: 0px 8px 0px 0px;
    /* max-width: 100%; */
  }

  nav div {
    padding: 1px 5px;
  }

  .logo-space {
    padding: 0px 0px;
    margin-left: -10px
  }

  .logo-space img {
    /* margin-left: 0px; */
    width: 250px;
    /* height: 90px; */
  }
  .link-space {
    padding: 0px 0px 0px 0px;
    margin-left: -20px;
  }

  .link-space ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    /* padding: 0px 7px 0px 20px; */
  }
  .link-space ul a {
    text-decoration: none;
    padding: 0px 10px;
    color: white;
    margin: 0px 70px 0px 0px;

  }
</style>

