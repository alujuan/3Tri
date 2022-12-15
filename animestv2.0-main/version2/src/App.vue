<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  margin: 0 auto;
  font-weight: normal;
  height: 100vh;
}
header {
  background-color: #000000;
  color: rgb(255, 255, 255);
  height: 15%;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

a {
  color: inherit;
  text-decoration: none;
}
#footer {
  height: 200px;
  background-color: black;
  color: rgb(228, 82, 82);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

</style>
