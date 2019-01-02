const Koa = require('koa');
const path = require('path');
const app = new Koa();

const static = require('koa-static')

app.use(static(
  path.join( __dirname,  "../../dist/")
))
app.listen(9000, () => {
    console.log('server is starting at port 9000')
  })
