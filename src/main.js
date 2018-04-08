import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import {paths, routes} from './router.js';
import Cookies from 'js-cookie';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex';
import store from './vuex/store'
import './my-theme/index.less';
import axiosPlugin from "./api/http";
import Urls from './api/backend_urls'
import {Tabpane} from 'iview';
import Icon from 'vue-svg-icon/Icon.vue';


Vue.use(VueRouter);
Vue.use(axiosPlugin);
Vue.use(iView);
Vue.use(Vuex);

// 配置property 使用的时候: this.$Urls
Object.defineProperty(Vue.prototype, "$Urls", { value: Urls })
Object.defineProperty(Vue.prototype, "$Utils", { value: Util })
Object.defineProperty(Vue.prototype, "$Cookies", { value: Cookies })
Object.defineProperty(Vue.prototype, "$Paths", { value: paths })
Object.defineProperty(Vue.prototype, "$Routes", { value: routes })




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


// 公共组件
Vue.component('i-icon', Icon);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});

