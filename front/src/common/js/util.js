export function formatUrl (data) {
  var _string = '';
  Object.keys(data).forEach((item) => {
    _string += encodeURI(item) + "=" + encodeURI(data[item]) + "&";
  })
  return _string.substr(0, _string.length - 1);
};

export function handleResData(vm, resData) {
  if (resData && typeof resData === 'object') {
    Object.keys(resData).forEach((key) => {
      if (vm.hasOwnProperty(key)) {
        vm[key] = resData[key];
      }
    });
  }
};
