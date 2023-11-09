import { createRouter, createWebHistory } from 'vue-router'; // Importe as funções necessárias do Vue Router
import HomeH from '@/components/HomeH'
import QuemSou from '@/components/QuemSou'
import OQueFaco from '@/components/OQueFaco'
import HobbieS from '@/components/HobbieS'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeH
  },
  {
    path: '/quemsou',
    name: 'quemsou',
    component: QuemSou
  },
  {
    path: '/oquefaco',
    name: 'oquefaco',
    component: OQueFaco
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: HobbieS
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  // router.beforeEach((to, from, next) => {
  //   document.title = `${to.meta.title}`;
  //   next();
  // });
  export default router;

