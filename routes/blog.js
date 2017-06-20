var express = require('express');
var router = express.Router();
var Article = require('../db/schema/article');

/* GET home page. */
router.get('/getNewArticles', function(req, res, next) {
    Article.find({}, ['_id', 'title', 'date']).exec().then(function(result) {
        res.send({
            success: true,
            message: '获取最新文章列表成功',
            result: result
        });
    }).catch(function(){
        res.send({
            success: false,
            message: '获取最新文章列表失败',
            result: result
        });
    });
});

module.exports = router;
