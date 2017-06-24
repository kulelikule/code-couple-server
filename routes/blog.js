var express = require('express');
var router = express.Router();
var Article = require('../db/schema/article');

/* GET home page. */
router.get('/getNewArticles', function(req, res) {
    Article.find({}, ['_id', 'title', 'date']).limit(10).sort({'date': -1}).exec().then(function(result) {
        res.send({
            success: true,
            message: '获取最新文章列表成功',
            result: result
        });
    }).catch(function(e){
        console.log(e);
        res.send({
            success: false,
            message: '获取最新文章列表失败',
            result: []
        });
    });
});

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
