<template>
  <div class="c-app">
    <Sidebar/>
    <div class="c-wrapper c-fixed-components">
      <Header/>
      <div class="c-body">
        <main class="c-main">
          <transition name="fade">
            <div class="container-fluid">
              <div class="fade-in">
                <router-view></router-view>
              </div>
            </div>
          </transition>
        </main>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */

  import Sidebar from './Sidebar'
  import Header from './Header'
  import Footer from './Footer'

  export default {
    name: 'MainContainer',

   // store: CredentialsStore,

    components: {
      Sidebar, Header, Footer
    },
    mounted () {
     /* this.initVue()*/
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
