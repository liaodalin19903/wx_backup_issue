/**
 * Created by ldl on 2018/3/14.
 */
/*
* 基础util, 服务于Util
* */

// 判断对象是否是字符串
function isString(obj){
  return Object.prototype.toString.call(obj) === "[object String]";
}

// 判断是否是数组
function isArray(arr){
  return arr instanceof Array;
}

// 判断是否是对象
function isObject(obj) {
  if (obj === null || obj === undefined) {
    return false
  }
  return obj.constructor === Object;
}

// 判断是否是空对象
function isEmptyObj(obj) {
  return JSON.stringify(c) == "{}"
}

// ----- 导出

export default {
  isString,
  isArray,
  isObject,
  isEmptyObj
}




