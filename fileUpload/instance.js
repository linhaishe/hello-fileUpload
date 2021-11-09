/*axios请求的二次封装*/

//请求主体格式化，只有我的请求头里的contenttype是x-www-form-urlencoded时，才进行格式化。因为x-www-form-urlencoded的请求里的数据格式不是对象，而是xxx&xxx的格式。这样的格式可以通过Qs.stringify(data)来进行处理。
let instance = axios.create();
instance.deraults.baseUrl = 'http:127.0.0.1:8888';
instance.defaults.headers['Content-Type'] = 'multipart/form-data';

//请求体数据格式化，因为我们传入的是对象，我们需要将对象转化成xxx&xxx的格式。
instance.defaults.transformRequest = (data, headers) => {
  const contentType = headers['Content-Type'];
  if (contentType === 'application/x-www-form-urlencoded') {
    return Qs.stringify(data);
  }
  return data;
};

//响应拦截器,在服务器响应成功后，then方法调用前的一个位置。提前处理响应数据
instance.interceptors.reponse.use(
  (response) => {
    return response.data;
  },
  (reason) => {
    //统一做失败的提示处理即可，所有的失败都在这里处理
    return Promise.reject(reason);
  }
);
