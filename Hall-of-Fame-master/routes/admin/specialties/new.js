/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
module.exports.get = function (req, res, next) {
    res.render('admin/specialties/new', {title: 'Express'});
}
module.exports.post = function (req, res, next) {
    console.log(req.body.title);
    mongoose.model('Speciality').create({
        title: req.body.title
    }, function (err, speciality) {
        if (err) {
            return next(new Error('asd'));
        }
        return res.redirect('/admin/specialties');
    })
};