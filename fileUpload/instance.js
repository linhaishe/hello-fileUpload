/*axios 请求的二次封装*/

//请求主体格式化，只有我的请求头里的contenttype是x-www-form-urlencoded时，才进行格式化。因为x-www-form-urlencoded的请求里的数据格式不是对象，而是xxx&xxx的格式。这样的格式可以通过Qs.stringify(data)来进行处理。
