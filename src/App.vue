<template>
  <div id="app">
    <nav id="nav">
      <router-link id="home" to="/">
        <img class="logo" src="@/assets/navbar_logo.svg" alt="logo" />
      </router-link>
      <ul>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/book">知識百科</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/components">Components</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/blog-landing">果農日誌</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/shop">水果市集</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/member/information">會員中心</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/adminLogin">後台</router-link>
          </div>
        </li>
        <li class="dropdown">
          <div class="title">
            <router-link class="page" to="/blog-post">測試用</router-link>
          </div>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<script>
import "@/style/main.scss";

export default {};
</script>