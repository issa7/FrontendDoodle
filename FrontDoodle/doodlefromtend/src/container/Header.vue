<template>
  <header class="c-header c-header-light c-header-fixed c-header-with-subheader">
    <button class="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
      <svg class="c-icon c-icon-lg">
        <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-menu"></use>
      </svg>
    </button><a class="c-header-brand d-lg-none" href="#">
    <svg width="118" height="46" alt="CoreUI Logo">
      <use xlink:href="assets/brand/coreui.svg#full"></use>
    </svg></a>
    <button class="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
      <i class="fas fa-bars"/>
    </button>
    <ul class="c-header-nav d-md-down-none">
      <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Dashboard</a></li>
      <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Users</a></li>
      <li class="c-header-nav-item px-3"><a class="c-header-nav-link" href="#">Settings</a></li>
    </ul>
    <ul class="c-header-nav ml-auto mr-4">
      <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
        <svg class="c-icon">
          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-bell"></use>
        </svg></a></li>
      <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
        <svg class="c-icon">
          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-list-rich"></use>
        </svg></a></li>
      <li class="c-header-nav-item d-md-down-none mx-2"><a class="c-header-nav-link" href="#">
        <svg class="c-icon">
          <use xlink:href="vendors/@coreui/icons/svg/free.svg#cil-envelope-open"></use>
        </svg></a></li>
      <li class="c-header-nav-item dropdown"><a class="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      </a>
        <div class="dropdown-menu dropdown-menu-right pt-0">
          <div class="dropdown-header bg-light py-2"><strong>Menu</strong></div>
          <a class="dropdown-item" href="#">
            <i class="fas fa-id-badge c-icon mr-2"/> Profil
          </a>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item" @click.prevent="destroyAccess">
            <i class="fas fa-sign-out-alt c-icon mr-2"/> Logout
          </div>
        </div>
      </li>
    </ul>
  </header>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    name: 'Header',

  //  store: CredentialsStore,

    methods: {
      /*/!*...Vuex.mapActions({
        disconnect: 'destroyAccess'*!/
      }),*/

      destroyAccess () {
        /*this.disconnect()
        this.$router.push({ name: 'Login' })*/
      }
    }
  }
</script>

<style scoped>

</style>
