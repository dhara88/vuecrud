import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import App from './App.vue';
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import Read from './components/Read.vue';
import Login from './components/Login.vue';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter); 
Vue.use(VueAxios, axios);

Vue.config.productionTip = true;
console.log("test")
const routes = [
  { 
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Read',
    path: '/read',
    component: Read
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')