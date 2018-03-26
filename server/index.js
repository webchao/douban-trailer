const Koa = require('koa');
const pug = require("pug")
const app = new Koa();
const {
    htmlTpl,
    pugTpl
} = require('./tpl');
app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = pug.render(pugTpl, {
        you: 'luke',
        me: 'xiaochao'
    });
})
app.listen(4455)