var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var state;
    if (!req.session.username) {
        req.session.username = '123';
        //res.send('刚帮你登录');
        state = '刚帮你登录'
    } else {
        //res.send('已经登录');
        state = '已经登录'
    }
    res.render('index', { title: state });
});

module.exports = router;
