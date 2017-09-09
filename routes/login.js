var express = require('express');
var router = express.Router();
var User = require('../db/schema/user');

router.post('/', function (req, res) {
    var userInfo = {
        username: req.body.username,
        password: req.body.password
    }
    User.find(userInfo).exec().then(function(result){
        var info;
        if(result.length === 0) {
            info = {
                success: false,
                message: '账号或密码错误'
            }
        }else{
            req.session.user = userInfo
            info = {
                success: true,
                message: '登录成功'
            }
        }
        res.send(Object.assign(info, {
            result: result
        }))
    }).catch(function(e){
        console.log(e);
        res.send({
            success: false,
            message: '登录失败',
            result: e
        });
    })
})

module.exports = router;
