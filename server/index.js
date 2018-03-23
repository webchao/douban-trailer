const Koa = require('koa');
const app = new Koa();
const {
    html,
    ejsTlp
} = require('./tpl');
const ejs = require('ejs');
app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = ejs.render(ejsTlp, {
        you: 'Luke',
        me: 'xiaochao'
    });
})
app.listen(4455)