import { createRouter, createWebHistory } from 'vue-router'
// import BarChart from '@/components/BarChart.vue'
import TimeHistogram from '@/views/TimeHistograms.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/hist",
      name: "TimeHistogram",
      component: TimeHistogram
        
    }
  ]
});