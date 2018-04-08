/**
 * Created by ldl on 2018/3/15.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import {app_routes} from '../router';
import Cookies from 'js-cookie';
import Util from '../libs/util';
import LocalStorageUtil from '../utils/local_storage_util'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 路由
    routes: [
      ...app_routes
    ],
    //
    menu_list: [],
    page_opened_list: [
      {
        title:'首页',
        path: '',
        name: 'home_index'
      }
    ],
    current_page_name: '',
    current_path: [
      {
        title:'首页',
        path: '',
        name: 'home_index'
      }
    ],
    opened_submenu_arr: [],  // 要展开的菜单数组
    menu_theme: '', // 主题
    theme: '',
    cache_page: [],
    lang: '',
    is_full_screen: false,
    dont_cache: [],
    token: null,
    user_info: LocalStorageUtil.get('user_info')
  },
  getters: {

  },
  mutations: {
    set_user_info_null(state){
      state.user_info = null
    }
  },
  actions: {

  }
});


