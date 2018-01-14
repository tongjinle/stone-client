import { api } from '../api.js';
import { ajax } from  '../util.js';

let _create = function (count=2,coin=100){
  let data = {
    count: count,
    coin:coin
  }
  let url  = api.room.create();
  let method = 'POST'
  return ajax({url,method,data});
}

module.exports =  {
 _create,
}