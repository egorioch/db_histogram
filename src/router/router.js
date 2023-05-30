import { createRouter, createWebHistory } from 'vue-router'
// import BarChart from '@/components/BarChart.vue'
import TimeHistogram from '@/views/TimeHistograms.vue'
import ModalWindowComponent from '@/components/ModalWindowComponent'
import ParentComponent from '@/components/ParentComponent'

export default createRouter({
  history: createWebHistory(),
  routes: [
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
    }
  ]
});