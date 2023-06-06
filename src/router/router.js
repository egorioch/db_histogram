import { createRouter, createWebHistory } from 'vue-router'
// import BarChart from '@/components/BarChart.vue'
import TimeHistogram from '@/views/TimeHistograms.vue'
import ParentComponent from '@/components/ParentComponent'
import AuthorizationView from '@/views/AuthorizationView.vue'
import NotesTest from '@/components/NotesTest.vue'
import Secure from '@/components/SecureComponent.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/secure",
      name: "SecureComponent",
      component: Secure,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/hist",
      name: "TimeHistogram",
      component: TimeHistogram

    },
    {
      path: "/card",
      name: "ParentComponentForCard",
      component: ParentComponent
    },
    {
      path: "/login",
      name: "AuthorizationView",
      component: AuthorizationView
    },
    {
      path: "/notes",
      name: "NotesTest",
      component: NotesTest
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router;
