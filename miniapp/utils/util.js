let promise;
let ajax = function ({ url, data = {}, method = 'GET',myheader={}}){
  return promise.then(options=>{
    let currentData = Object.assign({}, data);
    let reg = /\auth\//g;
    let header = reg.test(url) ? Object.assign({}, options, myheader) :{};
    return new Promise((resolve, reject) => {
      wx.request({
        url:url,
        method,
        header,
        currentData,
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err);
        }
      })
    })
  })
};

let login  = function (){
  let options = {
        openId:"1234567890",
  }
  return promise = Promise.resolve(options);
    wx.login({
      success:res=>{
        if(res.code){
          let options  = {
            openId: res.code
          };
          //code换取openId
           promise = Promise.resolve(options);
        }
      }
  })
}

module.exports = {
  login,
  ajax
}
