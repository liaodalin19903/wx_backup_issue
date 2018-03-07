import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import {routes} from './router.js';

import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);


Vue.use(iView);



// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: routes
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

import {Tabpane} from 'iview';

// Vue.component("Tabpane", Tabpane);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});