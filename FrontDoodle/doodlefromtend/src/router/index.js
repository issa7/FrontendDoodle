import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
useEslint: false
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      name: 'Home',
      redirect: {name: 'Dashboard'},
      component: () => import('../container/MainContainer.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue')
        },
        {
          path: 'parameters',
          name: 'Parameters',
          redirect: {name: 'Parameters.list'},
          component: {
            render (c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: 'Createur',
              name: 'Parameters.Createur',
              component: () => import('../views/createur/Creator.vue')
            },

          ]
        },

        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/connexion/login.vue')
        },
        {
          path: 'sondageDate/:id?',
          name: 'SondageDate',
          component: () => import('../views/Sondage/SondageDate.vue')
        },
        {
          path: 'dateSondage/:id?',
          name: 'dateSondage',
          component: () => import('../views/Sondage/DateSondage.vue')
        },
        {
          path: 'participant/:id?',
          name: 'participant',
          component: () => import('../views/Sondage/Participants.vue')
        },
        {
          path: 'reunion/:id?',
          name: 'reunion',
          component: () => import('../views/Sondage/Reunion.vue')
        },
        {
          path: 'listParticipant/:id?',
          name: 'listParticipant',
          component: () => import('../views/Sondage/ListPartcipants.vue')
        },
      ]
    }
  ]
}
