<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import './assets/vendors/coreui/coreui/js/coreui.bundle.min.js'
  import './assets/vendors/coreui/utils/js/coreui-utils.js'
  import '@fortawesome/fontawesome-free'
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/css/style.css';
  @import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
</style>
