const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const MyRouter = require('./router/index.js');

const app = new Koa();

app.use(koaStatic( path.join( __dirname,  "../../dist") ))

app.use(MyRouter.routes()).use(MyRouter.allowedMethods());

app.listen(3000)
console.log('server is starting at port 3000')