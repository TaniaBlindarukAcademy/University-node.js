/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
module.exports.get = function (req, res, next) {
    mongoose.model('Speciality').find({}).sort({created_at: -1}).exec(function (err, specialties) {
        if (err) {
            return next(new Error('Якась дивна помилка'));
        }
        return res.render('admin/specialties/list', {
            title: 'specialties | Admin',
            specialties: specialties
        });
    });
};
