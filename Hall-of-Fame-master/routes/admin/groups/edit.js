/**
 * Created by tania on 30.01.16.
 */
var mongoose = require('mongoose');
var async = require('async');
module.exports.get = function (req, res, next) {
    var groupId = req.params.groupId;
    async.parallel({
        group:function(callback){
            mongoose.model('Group').findById(groupId,function(err,group){
                callback(err,group);
            })
        },
        specialties:function(callback){
            mongoose.model('Speciality').find({},function(err,specialties){
                callback(err,specialties)
            })
        }
    },function(err,result){
        if(err)return next(err);
        return res.render('admin/groups/edit', {
            title: 'Express',
            group: result.group,
            specialties: result.specialties
        });

    });
}
module.exports.post = function (req, res, next) {
    var groupId = req.params.groupId;
    mongoose.model('Group').findById(groupId, function (err, group) {
        if (err) {
            return next();
        } else {
            group.update({
                title: req.body.title,
                year_start: req.body.year_start,
                _speciality: req.body.specialties
            }, function (err, group) {
                if (err) {
                    return new Error('Помилка при збережені курсу');
                }
                return res.redirect("/admin/groups");
            })
        }
    })
}

