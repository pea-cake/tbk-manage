import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: "/login",
      name: "login",
      component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue'),
      meta: {
        isPublic: true
      }
    },
    {
      path: "/",
      name: "main",
      component: () => import( /* webpackChunkName: "main" */ '../views/Main.vue'),
      children: [
        {
          path: "/customer/list",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/customer/CustomerList.vue'),
        },
        {
          path: "/customer/create",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/customer/CustomerEdit.vue'),
        },
        {
          path: "/customer/edit/:id",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/customer/CustomerEdit.vue'),
          props: true
        },
        {
          path: "/order/list",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/order/OrderList.vue'),
        },
        {
          path: "/order/create",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/order/OrderEdit.vue'),
        },
        {
          path: "/order/edit/:id",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/order/OrderEdit.vue'),
          props: true
        },
        {
          path: "/turn_link/list",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/turn_link/TurnLinkList.vue'),
        },
        {
          path: "/turn_link/create",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/turn_link/TurnLinkEdit.vue'),
        },
        {
          path: "/turn_link/edit/:id",
          component: () => import( /* webpackChunkName: "category_edit" */ '../views/turn_link/TurnLinkEdit.vue'),
          props: true
        },
        {
          path: "/users/list",
          component: () => import( /* webpackChunkName: "link_list" */ '../views/UserList.vue'),
        },
        {
          path: "/admin_users/create",
          component: () => import( /* webpackChunkName: "admin_edit" */ '../views/AdminUserEdit.vue'),
        },
        {
          path: "/admin_users/edit/:id",
          component: () => import( /* webpackChunkName: "admin_edit" */ '../views/AdminUserEdit.vue'),
          props: true
        },
        {
          path: "/admin_users/list",
          component: () => import( /* webpackChunkName: "admin_list" */ '../views/AdminUserList.vue'),
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router;