

export const paths = {
  home: '/',

  dataCenter: '/data-center',
  dataCenterDetail: '/data-center/detail/:id',  // 数据中心详情

  forgetPassword: '/forget-password',
  forgetPassword_chooseAccountType: 'forget-password-choose-account-type',  // 忘记密码-选择账户类型
  forgetPassword_emailHasSent:'email-has-sent',  // 忘记密码-email已经发送
  forgetPassword_msgHasSent:'msg-has-sent',   // 忘记密码-短信已经发送

  register:'/register',

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
    path: paths.dataCenterDetail,
    name: '数据中心详情',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./views/数据中心/wx-number-detail.vue'], resolve)
  },
  {
    path: paths.forgetPassword,
    name: '忘记密码',
    meta: {
      title: ''
    },
    redirect:paths.forgetPassword + '/' +paths.forgetPassword_chooseAccountType,
    component: (resolve) => require(['./views/忘记密码/forget-pwd.vue'], resolve),
    children: [
      {
        path: paths.forgetPassword_chooseAccountType,
        name: '选择账户类型',
        meta: {
          title: ''
        },
        component:(resolve) => require(['./views/忘记密码/components/choose-account-type.vue'], resolve)
      },
      {
        path: paths.forgetPassword_emailHasSent,
        name: '邮件已经发送',
        meta: {
          title: ''
        },
        component:(resolve) => require(['./views/忘记密码/components/email_has_sent.vue'], resolve)
      },
      {
        path: paths.forgetPassword_msgHasSent,
        name: '短信已经发送',
        meta: {
          title: ''
        },
        component:(resolve) => require(['./views/忘记密码/components/msg_has_sent.vue'], resolve)
      },
    ]


  },
  {
    path:paths.register,
    name:'注册',
    meta:{
      title:''
    },
    component: (resolve) => require(['./views/注册/register.vue'], resolve)
  },
];

export const routes = [
  ...app_routes,
];
