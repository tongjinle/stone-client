import { api } from '../api.js';
import { ajax } from  '../util.js';

let _create = function(num,coin){
  let data = {
    num:num,
    coin:coin
  }
  let url  = api.room.create();
  let method = 'POST'
  return Promise.resolve(2);
  return ajax({url,method,data});
}

module.exports =  {
 _create,
}