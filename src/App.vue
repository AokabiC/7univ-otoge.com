<template>
  <div id="app">
    <navbar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.wf-jp {
  font-family: "Noto Serif JP", serif;
}
.wf-en {
  font-family: "Montserrat", serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
