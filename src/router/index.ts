import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import {  I18n } from 'vue-i18n';

//import { setI18nLang, loadLocaleMessages, SUPPORTED_LOCALES } from '@/i18n';

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

export function setupRouter(i18n: I18n): Router {
  // const locale: string =
  //   i18n.mode === 'legacy' ? i18n.global.locale : ((i18n.global as unknown) as Composer).locale.value;

  // setup routes
  const routes: Array<RouteRecordRaw> = [
    //{
    // path: '/:locale/',
    // name: 'home',
    // component: Home,

    //children: [
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
      path: '/d/:deckId/:diskSpaceId',
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
    // ]
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: () => `/${locale}`
    // },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ];

  // create router instance
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  // navigation guards
  /*router.beforeEach(async (to, from, next) => {
    const paramsLocale = (to.params as any).locale as string;

    // use locale if paramsLocale is not in SUPPORTED_LOCALES
    if (!SUPPORTED_LOCALES.includes(paramsLocale)) {
      return next(`/${locale}`);
    }

    // load locale messages
    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale);
    }

    // set i18n language
    setI18nLang(i18n, paramsLocale);

    return next();
  });*/

  return router;
}

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/test',
//     name: 'Test',
//     component: Test, //load('Test'),
//   },
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/d/:deckId/:diskspaceId',
//     name: 'Chat',
//     component: Chat,
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login,
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: Register,
//   },
//   {
//     path: '/:catchAll(.*)',
//     name: 'NotFound',
//     component: NotFound,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

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
