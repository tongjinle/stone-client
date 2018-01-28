import {api} from '../api.js';
import {ajax} from '../util.js';

export function _getList(page=0,size=6){
  let url = api.goods.query();
  let method = 'GET';
  let data = {
    pageSize:size,
    pageIndex:page,
  }
  return ajax({
    url,data,method
  })
}

export function _buygoods(goodsname){
  let url = api.goods.buy();
  let method = 'POST';
  let data = {
    name: goodsname
  }
  return ajax({
    url,data,method
  })
}

export class Goods {
  constructor(arg){
    this.imgSrc =arg.src;
    this.name = arg.name;
    this.price = arg.coin;
  }
}

export function _goodsList(arr){
  let list = new Array();
  if(Array.isArray(arr)){
    arr.forEach(el=>{
      let goods  = new Goods(el);
      goods.btn = "兑换"
      list.push(goods); 
    })
  }
  return list
} 