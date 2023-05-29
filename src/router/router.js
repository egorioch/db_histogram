import { createRouter, createWebHistory } from 'vue-router'
import BarChart from '@/components/BarChart.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/hist",
      name: "BarChart",
      component: BarChart
        
    }
  ]
});