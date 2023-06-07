import { createRouter, createWebHistory } from 'vue-router'
// import BarChart from '@/components/BarChart.vue'
import TimeHistogram from '@/views/TimeHistograms.vue'
import AbsenceReason from '@/components/AbsenceReason'
import AuthorizationView from '@/views/AuthorizationView.vue'
import NotesTest from '@/components/NotesTest.vue'
import Secure from '@/components/SecureComponent.vue'
import PaginationComponent from "@/components/PaginationComponent";
import MainPage from "@/views/MainPage";
import HistogramTools from '@/components/HistogramTools'
import ConcreteEmployeeHist from '@/views/ConcreteEmployeeHist'


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
      name: "AbsenceReason",
      component: AbsenceReason
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
    },
    {
      path: "/pagination",
      name: "PaginationComponent",
      component: PaginationComponent
    },
    {
      path: "/main",
      name: "MainPage",
      component: MainPage
    }, 
    {
      path: "/tools",
      name: "HistogramTools",
      component: HistogramTools
    },
    {
      path: "/employee",
      name: "ConcreteEmployeeHist",
      component: ConcreteEmployeeHist
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
