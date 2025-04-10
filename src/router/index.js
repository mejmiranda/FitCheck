import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ActivityLogView from '../views/ActivityLogView.vue'
import ProfileView from '../views/ProfileView.vue'
import NotificationView from '../views/NotificationView.vue'
import ReportsView from '../views/ReportsView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },


  {
    path: '/activity-log',
    name: 'activity-log',
    // route level code-splitting
    // this generates a separate chunk (activitylog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "activitylog" */ '../views/ActivityLogView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import('../views/NotificationView.vue')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('../views/ReportsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

