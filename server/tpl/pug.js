module.exports = `
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
                    h1 Hi #{you}s
                    p This is  #{me}
                .col-md-4
                    p (测试动态的pug的模板引擎)
`