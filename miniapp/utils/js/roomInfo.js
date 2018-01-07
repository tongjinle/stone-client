 import {api} from '../api.js';
 import {ajax} from '../util.js';
 let _getRoomInfo = function(id){
   let roomId = parseInt(id);
   let url = api.room.roomInfo();
   let data = {
     roomId:roomId,
   }
   let method = 'GET';
   return ajax({url,method,data})
 }

 module.exports ={
   _getRoomInfo
 }