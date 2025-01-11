import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from '@/components/LoginComponent.vue';
import RegisterUserComponent from '@/components/RegisterUserComponent.vue';
import MediaComponent from '@/components/MediaComponent.vue';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    meta: { showHeader: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterUserComponent,
    meta: { showHeader: false }
  },
  {
    path: '/listar-midias',
    name: 'Midias',
    component: MediaComponent,
    meta: { showHeader: true }
  }
];

const router = new Router({
  routes, 
  mode: 'history' 
});


export default router;
