let api  = {}
let BASE_URL = '';
api.gameList = {
  query:function(){
    return BASE_URL + ''; 
  }
}
api.userInfo = {
  bind:function(){
    return BASE_URL + '/bind';
  },
  query:function(){
    return BASE_URL + '/auth/user/info';
  },
  cancheck:function(){
    return BASE_URL + '/auth/check/canCheck';
  },
  daycheck:function(){
    return BASE_URL + '/auth/check/dayCheck';
  },
}
api.goods ={
  buy:function(){
    return BASE_URL + '/auth/item/buy';
  },
  query:function(){
    return BASE_URL + '/auth/item/list';
  }
}
api.room = {
  create:function(){
    return BASE_URL + '/auth/room/create';
  },
  roomInfo:function(){
    return BASE_URL + '/auth/roomInfo';
  },
  apply:function(){
    return BASE_URL + '/auth/room/apply';
  },
  comment:function(){
    return BASE_URL + '/auth/room/comment';
  },
  histroy:function(){
    return BASE_URL + '/auth/room/history';
  }
}
module.exports ={
  api
}