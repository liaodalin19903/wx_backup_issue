/**
 * Created by ldl on 2018/3/13.
 */
//注册全局过滤器
import Vue from 'vue'

Vue.filter('abs', function (value) {  //绝对值

  return Math.abs(value)
})

Vue.filter('formatData', function (data) {
  Date.prototype.format = function(format){
    var o = {
      "M+" : this.getMonth()+1, //month
      "d+" : this.getDate(),    //day
      "h+" : this.getHours(),   //hour
      "m+" : this.getMinutes(), //minute
      "s+" : this.getSeconds(), //second
      "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
      "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
      (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o){
      if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
    }
    return format;
  }
  if(data){
    return (new Date(data).format("yyyy-MM-dd hh:mm:ss"));
  }else{
    return ''
    //console.log(data,'时间1')
  }


})
Vue.filter('isTime', function (value) {
  let num=1
  if(typeof parseInt(value.replace(/[^0-9]/ig, ""))==='number'){
    num=parseInt(value.replace(/[^0-9]/ig, ""))
  }
  if(value.replace(/[^\u4e00-\u9fa5]/ig,"")==='年'){
    return num*12

  }else{
    return num
  }
})