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