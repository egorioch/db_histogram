import { createRouter, createWebHistory } from 'vue-router'
// import BarChart from '@/components/BarChart.vue'
import TimeHistogram from '@/views/TimeHistograms.vue'
import ModalWindowComponent from '@/components/ModalWindowComponent'
import ParentComponent from '@/components/ParentComponent'
import AuthorizationView from '@/views/AuthorizationView.vue'
import NotesTest from '@/components/NotesTest.vue'
import Secure from '@/components/SecureComponent.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/secure",
      name: "SecureComponent",
      component: Secure,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/hist",
      name: "TimeHistogram",
      component: TimeHistogram
        
    },
    {
      path: "/modal_window",
      name: "ModalWindowComponent",
      component: ModalWindowComponent
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

// export default router;
