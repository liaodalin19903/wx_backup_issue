/**
 * Created by ldl on 2018/3/13.
 */

const Urls = {}

// 用户API
Urls.users = {

  login() {
    return '/rest-auth/login/'
  },

  logout() {
    return 'rest-auth/logout/'
  },

  register(){
    return '/api/users/register/'
  } ,
  list(){
    return '/api/users/list/'
  },
  verify_password(){
    return '/api/users/verify_password/'
  },
  detail(username){
    return '/api/users/' + username + '/'
  } ,
  edit(username){
    return '/api/users/'+ username +'/edit/'
  },
  delete(username){
    return '/api/users/'+ username + '/delete/'
  },

  user_info(){  // 获取用户的信息
    return '/rest-auth/user/'
  }
}

// 微信号码
Urls.wx_numbers = {
  create(){
    return '/api/wx_numbers/create/'
  },
  list() {
    return '/api/wx_numbers/list/'
  },
  detail(id){
    return '/api/wx_numbers/'+id+'/'
  },
  edit(id) {
    return 'api/wx_numbers/' + id + '/edit/'
  },
  delete(id) {
    return '/api/wx_numbers/' + id + '/delete/'
  }
}

// 网站管理
Urls.website = new Object();

Urls.website.banner = {
  create(){
    return '/api/website_management/banner/create/'
  },
  list() {
    return '/api/website_management/banner/list/'
  },
  detail(id){
    return '/api/website_management/banner/'+id+'/'
  },
  edit(id) {
    return 'api/website_management/banner/' + id + '/edit/'
  },
  delete(id) {
    return '/api/website_management/banner/' + id + '/delete/'
  }
}

Urls.website.main_service = {
  create(){
    return '/api/website_management/main_service/create/'
  },
  list() {
    return '/api/website_management/main_service/list/'
  },
  detail(id){
    return '/api/website_management/main_service/'+id+'/'
  },
  edit(id) {
    return 'api/website_management/main_service/' + id + '/edit/'
  },
  delete(id) {
    return '/api/website_management/main_service/' + id + '/delete/'
  }
}

export default Urls

