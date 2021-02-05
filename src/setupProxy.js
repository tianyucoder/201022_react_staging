const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/peiqi', //前端发送请求时，只有包含/api前缀的请求地址，才会转发
    proxy({
      target: 'http://localhost:5000', //目标服务器（转发给谁）----必须写
      changeOrigin: true, //可写，可不写
			pathRewrite:{'^/peiqi':''}//去掉请求前缀(重写路径)---必须写
    })
  );
	app.use(
    '/qiaozhi', //前端发送请求时，只有包含/api前缀的请求地址，才会转发
    proxy({
      target: 'http://localhost:5001', //目标服务器（转发给谁）----必须写
      changeOrigin: true, //可写，可不写
			pathRewrite:{'^/qiaozhi':''}//去掉请求前缀(重写路径)---必须写
    })
  );
};