/*
  ajax请求函数模块  
  返回值：promise 对象（异步返回的数据是：response.data）
  */
function ajax (url, data={} , method= 'GET') {
  return new Promise ((resolve , reject) => {
    //定义变量
    let promise = null
    //把参数拼接到url上
    if (method === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
      } else {
      // 发送 post 请求
      promise = axios.post(url, data)
      }
      //处理响应结果
      promise.then(response => {
        //调用resolve，改变外层promise对象的状态，传递响应体data
        resolve(response.data)
      } , error => {
        //调用resolve，改变外层promise对象的状态，传递错误信息
        reject(error)
      })
  })
}

