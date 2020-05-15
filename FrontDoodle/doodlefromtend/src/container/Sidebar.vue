<template>
  <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
    <div class="c-sidebar-brand d-lg-down-none">
      <svg class="c-sidebar-brand-full" width="118" height="46" alt="CoreUI Logo">
        <use xlink:href="assets/brand/coreui.svg#full"></use>
      </svg>
      <svg class="c-sidebar-brand-minimized" width="46" height="46" alt="CoreUI Logo">
        <use xlink:href="assets/brand/coreui.svg#signet"></use>
      </svg>
    </div>
    <ul class="c-sidebar-nav">
      <li class="c-sidebar-nav-item">
        <router-link :to="{name: 'Home'}" class="c-sidebar-nav-link">
          <i class="fas fa-tachometer-alt c-sidebar-nav-icon"/> Liste des Sondage
        </router-link>
      </li>



      <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <i class="fas fa-cogs c-sidebar-nav-icon"/> Creer un compte</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item">
            <router-link :to="{name: 'Parameters.Createur'}" class="c-sidebar-nav-link">Créer un compte Createur</router-link>
          </li>
        </ul>
      </li>

      <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <i class="fas fa-cogs c-sidebar-nav-icon"/> Connexion du createur</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item">
            <router-link :to="{name: 'Login'}" class="c-sidebar-nav-link">Se connecter </router-link>
          </li>
        </ul>
      </li>

      <li class="c-sidebar-nav-item c-sidebar-nav-dropdown">
        <a class="c-sidebar-nav-link c-sidebar-nav-dropdown-toggle" href="#">
          <i class="fas fa-cogs c-sidebar-nav-icon"/> Sondage</a>
        <ul class="c-sidebar-nav-dropdown-items">
          <li class="c-sidebar-nav-item">
            <router-link :to="{name: 'SondageDate'}" class="c-sidebar-nav-link">Creer Sondage </router-link>
          </li>
        </ul>
      </li>
    </ul>

    <button class="c-sidebar-minimizer c-class-toggler" type="button" data-target="_parent" data-class="c-sidebar-minimized"></button>
  </div>
</template>
/* eslint-disable */
<script>

  // eslint-disable-next-line
  export default {
    // eslint-disable-next-line
    name: 'Sidebar'
  // eslint-disable-next-line
  }
</script>

<style scoped>

</style>
