// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/CompletedList',
        name: 'CompletedList',
        component: () => import(/* webpackChunkName: "completed" */ '@/views/CompletedList.vue'),
      },
      {
        path: '/inspection-detail/:id',
        name: 'inspection-detail',
        component: () => import(/* webpackChunkName: "inspection-detail" */ '@/views/InspectionDetail.vue'),
      },
      {
        path: '/ScheduledList',
        name: 'ScheduledList',
        component: () => import(/* webpackChunkName: "completed" */ '@/views/ScheduledList.vue'),
      },
      {
        path: '/KnowledgeBase',
        name: 'KnowledgeBase',
        component: () => import(/* webpackChunkName: "completed" */ '@/views/KnowledgeBase.vue'),
      },
      {
        path: '/AppSettings',
        name: 'AppSettings',
        component: () => import(/* webpackChunkName: "completed" */ '@/views/AppSettings.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
