/**
 * Created by ldl on 2018/3/13.
 */

const rex = {
  username: '^[a-zA-Z_0-9]{5,17}$', //
  password: '^[a-zA-Z_0-9]{5,17}$', // 长度在6-18之间，只能包含字符、数字和下划线。
}

// 验证username 是否符合规则
function validate_register_username(username) {
  var reg = new RegExp(rex.username)
  if(!reg.test(username)){
    return false
  }
  return true
}

// 验证password 是否符合规则
function validate_register_password(password) {
  var reg = new RegExp(rex.password)
  if(!reg.test(password)){
    return false
  }
  return true
}


export default {
  validate_register_username,
  validate_register_password
}


