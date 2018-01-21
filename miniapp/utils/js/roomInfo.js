 import {api} from '../api.js';
 import {ajax} from '../util.js';
 let _getRoomInfo = function(id){
   let roomId = id;
   let url = api.room.roomInfo();
   let data = {
     roomId:roomId,
   }
   let method = 'GET';
   return ajax({url,method,data})
 }

let _joinRoom = function(id){
  let roomId = id;
  let url = api.room.apply();
  let method = 'POST';
  let data ={
    roomId:roomId,
  }
  return ajax({url,method,data});
}


class RoomInfo{
  constructor(arg){
    this.roomBeginTime = this.dateformat(arg.beginTime);
    this.roomEndTime = this.dateformat(arg.endTime);
    this.roomPrice = arg.coin;
    this.roomCount = arg.count;
    this.roomOwner = arg.owner;
    this.memberList = arg.mateList;
    this.getcomment(arg.comment);
  }

  getcomment(comment){
    if (this.checkObj(comment)){
      Object.keys(comment).forEach(key=>{
        this[key] = comment[key]
      })
    }
  }
  dateformat(timer){
    if(this.checkInteger(timer)){
      let currentTimer = new Date(timer);
      let year = currentTimer.getFullYear();
      let month = currentTimer.getMonth() + 1;
      let day = currentTimer.getDate();
      let hour = currentTimer.getHours();
      let min = currentTimer.getMinutes();
      let sec = currentTimer.getSeconds();
      return `${hour}:${min}:${sec}`
    }
  }
  checkInteger(timer){
    return Number.isInteger(timer);
  }
  checkObj(n){
    return n instanceof Object 
  }
}




 module.exports ={
   _getRoomInfo,
   _joinRoom,
   RoomInfo
 }