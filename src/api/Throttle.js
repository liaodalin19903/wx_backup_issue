/**
 * Created by ldl on 2018/3/13.
 */
//节流函数

const Throttle=function(method,context){
  //console.log(method,context)

  clearTimeout(method.tId);
  method.tId=setTimeout(function(){
    method.call(context)
    //console.log(context)
  },context)
}
const throttle = function(func, wait) {
  var context, args, timeout, result;
  var previous ;
  var later = function() {
    previous = new Date;
    timeout = null;
    result = func.apply(context, args);
    console.log(previous,'9999+++')
  };
  var waittime=(function(wait){
    var now = new Date;
    context = this;
    args = arguments;
    timeout =setTimeout(later, wait);
  })(wait)
//   (function() {
//    var now = new Date;
//    var remaining = wait-(now-previous);
//    console.log(wait,now,previous)
//    context = this;
//    args = arguments;
//    if (remaining <= 0) {
//      clearTimeout(timeout);
//      timeout = null;
//      previous = now;
//      result = func.apply(context, args);
//      console.log(previous,'888++')
//    } else if (timeout==null) {
//    	console.log(previous,'666++')
//      timeout = setTimeout(later, remaining);
//    }
//    //return result;
//  })(wait);
};
export default Throttle