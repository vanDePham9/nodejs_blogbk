
class NewsController {
    //[GET] /news/:slug

    show(req, res) {
        res.send('ĐÂY LÀ :slug CỦA NEWS PAGE!!!')
    }

    //[GET] /news
    index(req, res) {
        res.render('news')
    }
    //[GET] /news/:slug
    // show(req, res) {
    //     res.send('hi')
    // }
}

//Exports NewsController to news.js can require be like library express, morgan, path
module.exports = new NewsController();
