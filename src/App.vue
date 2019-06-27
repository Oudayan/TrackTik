<template>
  <div id="app">
    <transition name="shiftx">
      <router-view/>
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  /* <transition name="slide-fade"> */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  /* .slide-fade-leave-active below version 2.1.8 */
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  /* <transition name="shiftx"> */
  .shiftx-enter-active, .shiftx-leave-active {
    transition: all .3s ease-out;
  }
  /* .fade-leave-active below version 2.1.8 */
  .shiftx-enter,
  .shiftx-leave-to {
    transform :  translateX(100vw);
  }

</style>
