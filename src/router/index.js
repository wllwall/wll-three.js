import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routes = [
  {
    path: '/threeMap',
    name: 'threeMap',
    component: r => require.ensure([], () => r(require('../components/threeMap/threeMap')), 'threeMap'),
    meta: {
      title: '三维地图'
    }
  },
  {
    path: '/alarmPage',
    name: 'alarmPage',
    component: r => require.ensure([], () => r(require('../components/alarmPage/alarmPage')), 'alarmPage'),
  },
  {
    path:'/',
    name:'test1',
    component: r => require.ensure([], () => r(require('../views/test1/index')), 'test1'),
  }
];
const router = new Router({
  routes
});
export default router;

