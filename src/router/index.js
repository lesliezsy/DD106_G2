import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/book',
    name: 'Book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import( /* webpackChunkName: "about" */ '../views/Book.vue');
    },
  },
  {
    path: '/components',
    name: 'Components',
    component: function () {
      return import('../views/Components.vue');
    },
  },
  {
    path: '/blog-landing',
    name: 'Blog-landing',
    component: function () {
      return import('../views/Blog-landing.vue');
    },
  },
  {
    path: '/blog-post',
    name: 'Blog-post',
    component: function () {
      return import('../views/Blog-post.vue');
    }
  },
  {

    path: '/shop',
    name: 'Shop',
    component: function () {
      return import('../views/Shop.vue');
    }
  }, 
  {
    path: '/member',
    name: 'Member',
    component: function () {
      return import('../views/Member.vue');
    },
    children: [{

        path: "information",
        component: function () {

          return import("@/views/Information.vue");
        }
      },
      {

        path: "order",
        component: () => {

          return import("@/views/Order.vue");
        }

      }
    ]
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: function () {
      return import('../views/AdminLogin.vue');
    }
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: function () {
      return import('../views/AdminLogin.vue');
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;