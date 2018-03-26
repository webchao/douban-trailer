const Koa = require('koa');
const views = require('koa-views'); //模板引擎
const {
    resolve
} = require('path'); //路径
const app = new Koa();

app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
})) //只要是pug模板文件，都会被识别成并解析成html
app.use(async (ctx, next) => {
    // 异步操作使用 await
    await ctx.render('index', {
        you: 'luke',
        me: 'xiaochao'
    })

})
app.listen(4455)