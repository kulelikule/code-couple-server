var express = require('express');
var router = express.Router();
var Article = require('../../db/schema/article');

router.post('/save', function(req, res, next) {
    var param = req.body;
    var article = new Article({
        title : param.title,
        author: param.author,
        date: param.date,
        content : param.content,
        keywords: param.keywords
    });

    article.save().then(function (result) {
        res.send({
            success: true,
            message: '文章保存成功！'
        });
    }).catch(function(e){
        console.log(e);
        res.send({
            success: true,
            message: '文章保存成功！'
        });
    });
});

module.exports = router;
