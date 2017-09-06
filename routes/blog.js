var express = require('express');
var router = express.Router();
var Article = require('../db/schema/article');

router.get('/getArticles', function(req, res){
    var pageNo = Math.max(1, req.query.pageNo) - 1
    var limit = Number(req.query.limit) || 20
    var countPromise = Article.count().exec()
    var artclesPromise = Article.find({}, ['_id', 'title', 'date']).skip(pageNo * limit).limit(limit).sort({'date': -1}).exec()

    Promise.all([countPromise, artclesPromise]).then(function(result) {
        res.send({
            success: true,
            message: '获取最新文章列表成功',
            result: {
                count: result[0],
                data: result[1]
            }
        });
    }).catch(function(e){
        console.log(e);
        res.send({
            success: false,
            message: '获取最新文章列表失败',
            result: []
        });
    });
})

router.get('/getArticleDetails', function (req, res) {
    Article.findById(req.query.id).exec().then(function(result){
        res.send({
            success: true,
            message: '获取文章详情页内容成功',
            result: result
        }).catch(function(e){
            console.log(e);
            res.send({
                success: false,
                message: '获取文章详情页内容失败',
                result: {}
            });
        })
    })
})

module.exports = router;
