import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Published from '@/pages/published';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/:noteId',
      cache: false,
      name: 'Published',
      component: Published,
    },
  ],
});
