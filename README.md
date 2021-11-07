# hello-fileUpload
demo for fileUpload
### for upload.js
请求主体传递给服务器的数据格式有：
- FormData
- x-www-form-urlencoded
- json字符串
- 普通文本字符串
- Buffer

通过FormData数据格式进行数据传递时，我们会通过创建新的FormData实例，通过append方法将文件的内容存储在fm实例中。存储需要的文件内容，并通过axios数据传递。

当文件进行传输的时候，需要通过请求头对传输的文件类型进行说明。即利用Content-Type属性，说明你传输的文件格式。例，这次你的传输格式是通过FormData形式，则Content-Type的value为multipart/form-data。这是为了向服务器说明你传输的文件格式，便于解析。
```
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
```

