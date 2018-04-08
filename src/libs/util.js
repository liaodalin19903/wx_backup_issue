import axios from 'axios';
import env from '../config/env';
import BaseUtil from '../utils/base_utils'
import localStorageUtil from '../utils/local_storage_util'
import Cookies from 'js-cookie'

let util = {

};
util.title = function (title) {
    title = title || '微信号备份';
    window.document.title = title;
};

const ajaxUrl = env === 'development'
  ? 'http://127.0.0.1:8888'
  : env === 'production'
  ? 'https://www.url.com'
  : 'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

util.inOf = function (arr, targetArr) {
    let res = true;
    arr.map(item => {
        if (targetArr.indexOf(item) < 0) {
            res = false;
        }
    });
    return res;
};

util.oneOf = function (ele, targetArr) {  //判断否需要缓存
    //console.log(ele, targetArr,'99')
    if (targetArr.indexOf(ele) >= 0) {
        return true;
    } else {
        return false;
    }
};

util.showThisRoute = function (itAccess, currentAccess) {
    if (typeof itAccess === 'object' && itAccess.isArray()) {
        return util.oneOf(currentAccess, itAccess);
    } else {
        return itAccess === currentAccess;
    }
};

util.getRouterObjByName = function (routers, name) {
    let routerObj = {};
    routers.forEach(item => {
        if (item.name === 'otherRouter') {
            item.children.forEach((child, i) => {
                if (child.name === name) {
                    routerObj = item.children[i];
                }
            });
        } else {
            if (item.children.length === 1) {
                if (item.children[0].name === name) {
                    routerObj = item.children[0];
                }
            } else {
                item.children.forEach((child, i) => {
                    if (child.name === name) {
                        routerObj = item.children[i];
                    }
                });
            }
        }
    });
    return routerObj;
};

util.handleTitle = function (vm, item) {
    if (typeof item.title === 'object') {
        return vm.$t(item.title.i18n);
    } else {
        return item.title;
    }
};

util.setCurrentPath = function (vm, name) {
    let title = '';
    let isOtherRouter = false;
    vm.$store.state.routers.forEach(item => {
        if (item.children.length === 1) {
            if (item.children[0].name === name) {
                title = util.handleTitle(vm, item);
                if (item.name === 'otherRouter') {
                    isOtherRouter = true;
                }
            }
        } else {
            item.children.forEach(child => {
                if (child.name === name) {
                    title = util.handleTitle(vm, child);
                    if (item.name === 'otherRouter') {
                        isOtherRouter = true;
                    }
                }
            });
        }
    });
    let currentPathArr = [];
    if (name === 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.routers, 'home_index')),
                path: '',
                name: 'home_index'
            }
        ];
    } else if ((name.indexOf('_index') >= 0 || isOtherRouter) && name !== 'home_index') {
        currentPathArr = [
            {
                title: util.handleTitle(vm, util.getRouterObjByName(vm.$store.state.routers, 'home_index')),
                path: '/home',
                name: 'home_index'
            },
            {
                title: title,
                path: '',
                name: name
            }
        ];
    } else {
        let currentPathObj = vm.$store.state.routers.filter(item => {
            if (item.children.length <= 1) {
                return item.children[0].name === name;
            } else {
                let i = 0;
                let childArr = item.children;
                let len = childArr.length;

                while (i < len) {
                    if (childArr[i].name === name) {
                        return true;
                    }
                    i++;
                }
                return false;
            }
        })[0];

        if (currentPathObj!==undefined &&currentPathObj.children.length <= 1 && currentPathObj.name === 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '',
                    name: 'home_index'
                }
            ];
        } else if (currentPathObj!==undefined && currentPathObj.children.length <= 1 && currentPathObj.name !== 'home') {
            currentPathArr = [
                {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                },
                {
                    title: currentPathObj.title,
                    path: '',
                    name: name
                }
            ];
        } else if(currentPathObj!==undefined ){

            let childObj = currentPathObj.children.filter((child) => {
                return child.name === name;
            })[0];
            currentPathArr = [
                {
                    title: '首页',
                    path: '/home',
                    name: 'home_index'
                },
                {
                    title: currentPathObj.title,
                    path: '',
                    name: currentPathObj.name
                },
                {
                    title: childObj.title,
                    path: currentPathObj.path + '/' + childObj.path,
                    name: name
                }
            ];
        }
    }
    vm.$store.commit('setCurrentPath', currentPathArr);

    return currentPathArr;
};

util.openNewPage = function (vm, name, argu, query) {
    let pageOpenedList = vm.$store.state.pageOpenedList;
    let openedPageLen = pageOpenedList.length;
    let i = 0;
    let tagHasOpened = false;
    // console.log(pageOpenedList,'面板',name)
    while (i < openedPageLen) {

        if (name === pageOpenedList[i].name) {  // 页面已经打开
            vm.$store.commit('pageOpenedList', {
                index: i,
                argu: argu,
                query: query
            });
            tagHasOpened = true;
            break;
        }
        i++;
    }
    if (!tagHasOpened) {
        let tag =[]
        vm.$store.state.tagsList.map((item,index) => {

            if(name === item.name){

                tag.push(item)
            }else{

                if(item.children !==undefined){

                    item.children.map((items,index)=>{
                        if( name === items.name){
                            tag.push(items)
                        }else if(items.children !==undefined){

                            items.children.map((it,i)=>{
                                if(name === it.name){
                                    tag.push(it)
                                }
                            })
                        }
                    })
                }
            }
        });
        //console.log(tag,'tag',name)
        //console.log(tag,tag[0],'标签')
        tag = tag[0]==undefined?[]:tag[0];

        if(tag.children && tag.children !==undefined){
            tag.children.map((item,index)=>{
                item.name===name?tag=item:tag;

            })
        }
        //tag = tag.children ? tag.children[0] : tag;

        if (argu) {
            tag.argu = argu;
        }
        if (query) {
            tag.query = query;
        }

        vm.$store.commit('increateTag', tag);

    }

    vm.$store.commit('setCurrentPageName', name);
};

util.toDefaultPage = function (routers, name, route, next) {
    let len = routers.length;
    let i = 0;
    let notHandle = true;
    while (i < len) {
        if (routers[i].name === name && routers[i].redirect === undefined) {
            route.replace({
                name: routers[i].children[0].name
            });
            notHandle = false;
            next();
            break;
        }
        i++;
    }
    if (notHandle) {
        next();
    }
};

// 转换error中的response.data为字符串
util.convert_error_data_to_str = function (statusText, data){

    if(statusText !== null && statusText !== '' && statusText !== undefined) {
        return statusText
    }

    if(data === undefined || data === null){
        return ''
    }



    // 是对象
    if(BaseUtil.isObject(data)){

        var data_str = data[Object.keys(data)[0]].toString()

        if (data_str) {
            return data_str
        }

        return ''
    }
    if(BaseUtil.isString(data)){
        return data
    }


    if (data){
        return data.toString()
    }

    return ''

}

// 根据数据条数得到页码数目  (per_page_count: 每一页的条目,默认是20)
util.get_page_count_by_data_count = function (page_count, per_page_count=20) {

  return Math.ceil(page_count / per_page_count)

}

// 判断是否已经登录(简单地判断有没有token 和 user_info信息)
util.is_login = function () {

  var user_info = localStorageUtil.get('user_info')

  if (Cookies.get('token')  && user_info) {
    return true
  }
  return false
}

export default util;
