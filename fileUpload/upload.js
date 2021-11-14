//#region
/** 
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
*/
//#endregion
// import http from './instance';
// const FormData = require('form-data');
(function () {
  let upload = document.querySelector('#upload1'),
    upload_inp = upload.querySelector('.upload_inp'),
    upload_button_select = upload.querySelector('.upload_button.select'),
    upload_button_upload = upload.querySelector('.upload_button.upload'),
    upload_tip = upload.querySelector('.upload_tip'),
    upload_list = upload.querySelector('.upload_list');

  let _file = null;

  //上传文件事件处理
  upload_button_upload.addEventListener('click', function () {
    console.log('文件_file', _file);
    if (!_file) {
      alert('请上传文件');
    }
    //把文件传递给服务器Formbata / BASE64

    let formData = new FormData();
    formData.append('file', _file);
    formData.append('filename', _file.name);
    instance
      .post('/upload_single', formData)
      .then((res) => {
        console.log(res.data.code);
        if (res.data.code === 0) {
          alert(
            `文件已经上传成功~,您可以基于${res.data.servicePath}访问这个资源~~^ `
          );
          return;
        }
        return Promise.reject(res.data.codeText);
      })
      .catch((reason) => {
        alert('文件上传失败，请您稍后再试~~');
      });
  });

  //移除按钮的点击处理
  upload_list.addEventListener('click', function (ev) {
    // console.log('dianjidianji', ev);

    let target = ev.target.tagName;
    if (target === 'EM') {
      //点击的是移除按钮
      upload_tip.style.display = 'block';
      upload_list.style.display = 'none';
      upload_list.innerHTML = ``;
    }
  });
  //监听用户选择文件的操作
  upload_inp.addEventListener('change', function () {
    //获取用户选中的文件对象
    //+ name:文件名
    //+ size:文件大小B
    //+ type: 文件的MIME类型
    let file = upload_inp.files[0];
    console.log('check', upload_inp.files);
    _file = file;

    if (!file) return;
    //限制文件上传的格式「方案-」

    /** 
    if (!/(PNG |JPG |JPEG)/i.test(file.type)) {
      alert('.上传的文件只能是PNG/JPG/JPEG格式的');
      return;
    }
    */

    //限制文件上传的大小
    if (file.size > 2 * 1024 * 1024) {
      alert('.上传的文件不能超过2MB~~');
      return;
    }

    upload_tip.style.display = 'none';
    upload_list.style.display = 'block';
    upload_list.innerHTML = `   <li>
              <span>文件: ${file.name}</span>
              <span><em>移除</em></span>
            </li>`;
  });

  upload_button_select.addEventListener('click', function () {
    upload_inp.click();
  });
})();
