/**
 * Created by tania on 30.01.16.
 */
var mongoose = require('mongoose');
var async = require('async');

module.exports.get = function (req, res, next) {
    var studentId = req.params.studentId;
    mongoose.model('Student').findById(studentId, function (err, student) {
        if(err || !student) {return next()}
        else{
            student.remove(function (err, student){
                return res.redirect('/admin/students');
            });

        }
    })
}
