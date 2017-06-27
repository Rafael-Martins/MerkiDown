import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Published from '@/pages/published';
import Templatemodal from '@/components/templateModal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/edit/:editId',
      name: 'Index edit',
      component: Index,
    },
    {
      path: 'published/:noteId',
      name: 'Published',
      component: Published,
    },
    {
      path: '/test',
      name: 'test',
      component: Templatemodal,
    },
  ],
});
