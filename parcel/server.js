const Koa = require('koa');
const serve = require('koa-static'); //模板引擎
const {
    resolve
} = require('path'); //路径
const app = new Koa();
app.use(serve(resolve(__dirname, './')))

app.listen(4466)