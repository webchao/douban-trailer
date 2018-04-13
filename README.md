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
## 打包react方法
>配置.babekrc
```shell
{
  "presets": ["env", "stage-0", "react"],
  "plugins": [
    "transform-runtime",
    "transform-decorators-legacy",
    "transform-class-properties"
  ]
}
```
>安装相关的react模块
```shell
npm i babel-preset-env babel-preset-stage-0 babel-preset-react babel-plugin-transform-runtime babel-plugin-transform-decorators-legacy -S

npm i react react-demo -S
```
# 利用爬虫搞定网站基础数据
## 介绍
Puppeteer是一个Node库，它提供了一个高级API来通过DevTools协议控制无头 Chrome或Chromium 。它也可以配置为使用完整（非无头）Chrome或Chromium。





#### 可以在浏览器中手动完成的大部分事情都可以使用Puppeteer完成！这里有几个例子可以帮助你开始：

* 生成页面的屏幕截图和PDF。
* 抓取SPA并生成预先呈现的内容（即“SSR”）。
* 自动表单提交，UI测试，键盘输入等。
* 创建一个最新的自动化测试环境。使用最新的JavaScript和浏览器功能，直接在最新版本的Chrome中运行测试。
* 捕获您网站的时间线跟踪，以帮助诊断性能问题。
## 安装
```shell
npm i puppeteer
```
## 使用方法
```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```
child_process
给予模块提供了衍生子进程的功能


```js
/*movie.js*/
/*调用path.resolve方法，将路径转化成绝对路径srcipt
 *将主进程文件导入给子进程 srcipt
 *触发不同的进程事件监听进程
 **/
const cp = require('child_process');
const {
    resolve
} = require('path'); //调用path.resolve
(async () => {
    const srcipt = resolve(__dirname, '../crawler/trailer-list.js'); //将相对路径转成绝对路径

    const child = cp.fork(srcipt, []);
    //console.log(child, '子进程');
    let invoked = false;
    child.on('error', err => {
        if (invoked) return
        invoked = true;
        console.log(err, 'error');
    })

    child.on('exit', code => {
        if (invoked) return
        invoked = true;
        let err = code === 0 ? null : new Error('exit code ' + code);
        console.log(err, 'exit');
    })
    child.on('message', data => {
        let result = data.result;
        console.log(result, 'message')
    })



})()
```

```js
//trailer-list.js
//允许子进程发送消息回父进程
   process.send({
        result
    })
//以结束状态码code指示Node.js同步终止进程。
    process.exit(0)
```