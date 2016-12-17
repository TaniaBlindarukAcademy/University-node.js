/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
module.exports.get = function (req, res, next) {
    mongoose.model('Speciality').find({}).exec(function (err, specialties) {
        if (err) {
            return next(new Error("Помилка при пошуку, всіх спеціальностей..."))
        }
        return res.render('admin/groups/new', {
            title: 'Створення групи',
            specialties: specialties
        });
    });
}
module.exports.post = function (req, res, next) {
    console.log(req.body.specialties);
    mongoose.model('Group').create({
        title: req.body.title,
        year_start: req.body.year_start,
        _speciality: req.body.specialties
    }, function (err, group) {
        console.log(err);
        if (err) {
            return next(new Error('asd'));
        }
        return res.redirect('/admin/groups');
    })
};