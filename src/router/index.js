import { createRouter, createWebHashHistory } from 'vue-router'
import scan from '../views/scan.vue'
import event from '../views/event.vue'
import gate from '../views/gate.vue'
import antrian from '../views/antrian.vue'

const routes = [
  {
    path: '/',
    name: 'scan',
    component: scan
  },
  {
    path: '/event',
    name: 'event',
    component: event
  },
  {
    path: '/gate',
    name: 'gate',
    component: gate
  },
  {
    path: '/antrian',
    name: 'antrian',
    component: antrian
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
