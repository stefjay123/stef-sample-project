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
        
        component: () => import('@/views/Home.vue'),
      }, 
      {
        path: '/questions',
        name: 'Questions',
        
        component: () => import('@/views/Questions.vue'),
      },
    
      {
        path: '/feedback',
        name: 'Feedback',
        
        component: () => import('@/views/feedback.vue'),
      },

      {
        path: '/rating',
        name: 'Rating',
        
        component: () => import('@/views/rating.vue'),
      },

      {
        path: '/walk-in',
        name: 'Walk-in',
        
        component: () => import('@/views/walk-in.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
