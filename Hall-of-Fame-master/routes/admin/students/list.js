/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
module.exports.get = function (req, res, next) {
    mongoose.model('Student').find({})
        .populate('group')
        .exec(function (err, students) {
            if (err) {
                return next(new Error('Якась дивна помилка'));
            }
            return res.render('admin/students/list', {
                title: 'Students | Admin',
                students: students
            });
        });
};
