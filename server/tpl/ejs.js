module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css">
<script src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>Hi <%= you %></h1>
                <p>This is <%= me %></p>
            </div>
            <div class="col-md-4">
                <p>测试静态页面调用</p>
            </div>
        </div>
    </div>
</body>
</html>
`