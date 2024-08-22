<script>
export default {
  
}
</script>

<template>
  <nav>
    <div class="logo-space">Logo</div>

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
    width: 100vw;
    background-color: #009688;
    color: white;
    margin-left: -8px;
    align-items: center;
  }

  nav div {
    padding: 20px 7px;
  }

  .logo-space {
    padding: 0px 25px;
  }
  .link-space ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 10px 10px;
  }
  .link-space ul a {
    text-decoration: none;
    padding: 0px 10px;
    color: white;
    margin: 10px 10px;

  }
</style>

