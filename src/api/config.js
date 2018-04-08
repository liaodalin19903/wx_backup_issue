/**
 * Created by ldl on 2018/3/13.
 */

import axios from 'axios';
import qs from 'qs' ;
import Cookies from 'js-cookie';


const serviceModule = {
  AxiosConfig:{
    baseURL: 'http://localhost:8001/',

    //http://10.10.10.104:8000
    //http://103.200.32.76:8001
    //http://cs.nlidc.com:8001
    responseType: "json",
    withCredentials: true,  // 关闭后不会带Cookie(里面有sessionid和csrftoken)

    xsrfCookieName: 'csrftoken',  // 默认是:XSRF-TOKEN
    xsrfHeaderName: 'x-csrftoken',   // 默认是: X-XSRF-TOKEN
    headers: {
      "Content-Type": "application/json;charset=utf-8",

    }
  }
}



let ApiSetting = serviceModule;
// let ApiSetting = {...serviceModule };

export default ApiSetting

