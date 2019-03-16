
export default [
  {
    path: '/user',
    component: '../layouts/User',
    routes: [
      { path: '/user/', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login', title: '登录' },
      { path: '/user/register/:phone?', component: './User/Register', title: '注册' }
    ]
  },
  {
    path: '/',
    component: '../layouts/Base',
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        component: './Index/index',
        title: '首页',
        icon: 'icon1'
      },
      {
        component: '404'
      }
    ]
  }
];
