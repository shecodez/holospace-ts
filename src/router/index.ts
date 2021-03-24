import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Chat from '@/views/Chat.vue';
import NotFound from '@/views/NotFound.vue';
import Test from '@/views/Test.vue';

// dynamic import cannot be analyzed by vite.
// function load(component: string) {
//   return () => import(`@/views/${component}.vue`);
// }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    component: Test, //load('Test'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/d/:deckId/:diskspaceId',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
// To have the local in every url
// ex: localhost:3000/en/about
const routes2 = [
  {
    path: '/:locale',
    component: {
      template: '<router-view></router-view>',
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales = store.state.locale.supportedLocales;
      if (!supported_locales.includes(locale)) {
        return next('en');
      }
      if (i18n.locale !== locale) {
        i18n.locale = locale;
      }
      return next();
    },
    children: [
      // children routes here...
    ],
  },
];
*/
