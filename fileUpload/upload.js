//const axios = require('axios').default;
const { default: axios } = require('axios');

(function () {
  let fm = new FormData();
  fm.append('file', '');
  fm.append('filename', '');
  axios.post('http://127.0.0.1:8888/upload_single', fm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  axios.post('/upload_single_base64'),
    { file: '', filename: '' },
    {
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
      },
    };
});

//axios进行同一公共默认配置后
(function () {
  let fm = new FormData();
  fm.append('file', '');
  fm.append('filename', '');
  //未设置响应拦截器之前通过响应体里的data获取响应数据
  axios.post('/upload_single', fm).then((res) => {
    res.data;
  });

  axios.post('/upload_single_base64'),
    { file: '', filename: '' },
    {
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
      },
    };
});

(function () {
  let fm = new FormData();
  fm.append('file', '');
  fm.append('filename', '');
  //设置响应拦截器后直接通过data获取数据，因为拦截器设置了返回response.data,我们只需要直接处理data就好了
  axios
    .post('/upload_single', fm)
    .then((data) => {})
    .catch((reason) => {});

  axios.post('/upload_single_base64'),
    { file: '', filename: '' },
    {
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
      },
    };
});
