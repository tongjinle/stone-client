import {api} from '../api.js';
import {ajax} from '../util.js';

export function _getList(page=0,size=8){
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

export function _buygoods(id){
  let url = api.goods.buy();
  let method = 'POST';
  let data = {
    id,
  }
  return ajax({
    url,data,method
  })
}