/**
 * Created by ldl on 2018/3/13.
 */
import axios from 'axios';
import qs from 'qs';
import ApiSetting from './config';
import Cookies from 'js-cookie';

const Axios = axios.create(
  ApiSetting.AxiosConfig
);
//console.log(ApiSetting.AxiosConfig)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"||
      config.method === "get"
    ) {
      // 序列化
    }

    // debugger
    // 若是有做鉴权token , 就给头部带上token
    if (Cookies.get('token')!==undefined) {  //
      config.headers['Authorization']= 'Token '+Cookies.get('token');
    }

    return config;
  },
  error => { //出错

    return Promise.reject(error.data.error.message);
  }
);
//拦截器
Axios.interceptors.response.use(
  res => {

    return res;
  },
  error => {

    return Promise.reject(error.response)
  }
);
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};