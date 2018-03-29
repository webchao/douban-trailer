# 使用views 结合 pug的模板引擎中间件
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
//server/index.js
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
>在存放模板指定文件夹下使用模板引擎构建 html 
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


## 将页面公共模板抽离
1. includes(样式放置文件夹)
2. layouts(模板放置文件夹)

### layouts
```pug
<!--layouts/default-->
DOCTYPE
html
    head
        meta(charset='utf-8')
        mate(name='viewport' content='width=device-width, initial-scale=1.0')
        block title
        include ../includes/style.pug
    body
        block container
        include ../includes/script.pug  
```

### script
```pug
<!-- ../includes/script.pug -->
script(src='https://cdn.bootcss.com/jquery/3.3.1/jquery.js')        
script(src='https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js')
```
### style
```pug
<!-- ../includes/style.pug -->
link(href='https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css', rel='stylesheet')
```

### view
```pug
 <!-- view/index.js -->
extends ./layouts/default
block title
    title Koa Douban 首页
block container
    .container
        .row
            .col-md-8
                h1 Hi #{you} 
                p This is  #{me}
            .col-md-4
                h3 测试动态模板中间件
```
# 利用parcel打包普通网站及Racte构架网站的资源方案
## parcel特征

* 🚀**炙手可热的**捆绑时间 - 多核编译以及文件系统缓存，即使在重新启动后也可快速重建。
* 📦 支持JS，CSS，HTML，文件资产等 - **不需要安装插件**。
* 🐠 在需要时使用Babel，PostCSS和PostHTML **自动转换模块** - 甚至`node_modules`.
* ✂️ 零配置**代码**使用动态`import()`语句分割。
* 🔥 内置支持**热模块更换**
* 🚨 友好的错误记录体验 - 语法突出显示的代码帧有助于查明问题。

##  parcel入门

1. 用npm安装到所在的项目上

```shell
npm i parcel-bundler -S
```
2. 常用的选项
```json
const options = {
  outDir: './dist', // 将生成的文件放入输出目录下，默认为 dist
  outFile: 'index.html', // 输出文件的名称
  publicUrl: './', // 静态资源的 url ，默认为 dist
  watch: true, // 是否需要监听文件并在发生改变时重新编译它们，默认为 process.env.NODE_ENV !== 'production'
  cache: true, // 启用或禁用缓存，默认为 true
  cacheDir: '.cache', // 存放缓存的目录，默认为 .cache
  minify: false, // 压缩文件，当 process.env.NODE_ENV === 'production' 时，会启用
  target: 'browser', // 浏览器/node/electron, 默认为 browser
  https: false, // 服务器文件使用 https 或者 http，默认为 false
  logLevel: 3, // 3 = 输出所有内容，2 = 输出警告和错误, 1 = 输出错误
  hmrPort: 0, // hmr socket 运行的端口，默认为随机空闲端口(在 Node.js 中，0 会被解析为随机空闲端口)
  sourceMaps: true, // 启用或禁用 sourcemaps，默认为启用(在精简版本中不支持)
  hmrHostname: '', // 热模块重载的主机名，默认为 ''
  detailedReport: false // 打印 bundles、资源、文件大小和使用时间的详细报告，默认为 false，只有在禁用监听状态时才打印报告
};
```
3. 执行生成的命令
```shell
parcel build parcel/index.html --no-cache -d parcel/dist  --public-url /dist/
```
