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
});
