import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Me from '@/views/Me.vue'
import GradeView from "@/views/GradeView.vue"
import ToolBar from "@/views/Toolbar.vue"
import Apicon from '@/views/Apicon.vue'
Vue.use(VueRouter)

const routes = [

  {
    path:'',
    name:'Toolbar',
    component:ToolBar,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/grade',
        name: 'grade',
        component: GradeView
      },
      {
        path:'/apicon',
        name: 'apicon',
        component:Apicon
      }
    ]
  },
  {
    path:"/me",
    name:'me',
    component:Me
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
