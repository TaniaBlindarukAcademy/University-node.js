/**
 * Created by tania on 2.02.16.
 */
var user = require('../../../config').user;
module.exports.get = function (req, res, next) {
    return res.render('admin/login/login', {title: 'Express'});
}
module.exports.post = function(req,res,next){
    if (user.login === req.body.login && user.password === req.body.password) {
        req.session.user = {
            login: req.body.login,
            password: user.password
        }
    }
    console.log("USER1");
    console.log(req.session.user);
    res.redirect('/admin');
}