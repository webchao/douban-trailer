# 使用views 结合 pug的总结
## 安装 views
```npm
npm i views -S
```

```npm
npm i pug -S
```
## 使用views 结合 pug

>只要是在views文件夹下的pug模板文件，都会被识别成并解析成html
```js
/*server/index.js */
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
})) 
```

>异步操作使用 await
```js
// server/index.js 
app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'luke',
        me: 'xiaochao'
    })
    })
```  
>在 存放模板指定文件夹下使用模板引擎构建 html 
```pug
<!-- view/index.js -->
DOCTYPE
html
    head
        meta(charset='utf-8')
        mate(name='viewport' content='width=device-width, initial-scale=1.0')
            title Koa2 server pug
    script(src='https://cdn.bootcss.com/jquery/3.3.1/jquery.js')        
    script(src='https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js')
    link(href='https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css', rel='stylesheet')
    body
        .container
            .row
                .col-md-8
                    h1 Hi #{you} 
                    p This is  #{me}
                .col-md-4
                    p (测试动态的pug的模板引擎)

```

    