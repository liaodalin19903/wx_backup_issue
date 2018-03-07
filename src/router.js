

export const paths = {
  home: '/',
  dataCenter: '/data-center',
  forgetPassword: '/forget-password',

}


export const app_routes = [
  {
    path: paths.home,
    name: '默认首页',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/首页/home.vue'], resolve)
  },
  {
    path: paths.dataCenter,
    name: '数据中心',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/数据中心/data-center.vue'], resolve)
  },
  {
    path: paths.forgetPassword,
    name: '忘记密码',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./views/忘记密码/forget-pwd.vue'], resolve)
  },

];

export const routes = [
  ...app_routes,
];
