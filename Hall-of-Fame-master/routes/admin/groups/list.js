/**
 * Created by tania on 29.01.16.
 */
var mongoose = require('mongoose');
module.exports.get = function (req, res, next) {
    mongoose.model('Group').find({}).populate('_speciality').exec(function (err, groups) {
        if (err) {
            return next(new Error('Якась дивна помилка'));
        }
        console.log(groups);
        return res.render('admin/groups/list', {
            title: 'Group | Admin',
            groups: groups
        });
    });
};
