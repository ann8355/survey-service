import Vue from 'vue';
import Router from 'vue-router';
import Overview from '@/pages/Overview';
import QuesSetting from '@/pages/QuesSetting';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
    },
    {
      path: '/:id',
      name: 'QuesSetting',
      component: QuesSetting,
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ],
});
