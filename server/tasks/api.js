const rp = require('request-promise-native'); // 从服务器请求链接，node里没有跨域请求，类似于php的curl
async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}` // 拼接豆瓣api
    const res = await rp(url);
    return res;
}
(async () => {
    let movies = [{
            doubanId: 2129039,
            title: '飞屋环游记',
            rate: 0,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2364094053.jpg'
        },
        {
            doubanId: 2131459,
            title: '机器人总动员',
            rate: 0,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p1461851991.jpg'
        }

    ];

    // 遍历数组
    movies.map(async movie => {
        console.log(movie.doubanId, 'movie')
        let movieData = await fetchMovie(movie);
        try {
            movieData = JSON.parse(movieData)
        } catch (err) {
            console.log(err)
        }

        // console.log(movieData)
    })
})()