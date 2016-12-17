/**
 * Created by tania on 30.01.16.
 */
var mongoose = require('mongoose');
var async = require('async');
module.exports.get = function (req, res, next) {
    async.parallel({
        groups: function(callback){
            mongoose.model('Group')
                .find({})
                .exec(function(err,groups){
                    callback(err,groups);
                }
            )
        },
        student: function(callback){
            var studentId = req.params.studentId;
            if(!studentId) {callback(new Error(),null)}
            else{
                mongoose.model('Student').findById(studentId,function(err,student){
                    callback(err,student);
                });
            }
        }
    },function(err,result){
        if(err){
            return next(err);
        }else if(!result.student){
            return next();
        }else{
            res.render('admin/students/edit', {
                title: result.student.name + 'Edit | Admin',
                student: result.student,
                groups: result.groups
            });
        }
    });
}

var upload_dir = process.env.OPENSHIFT_DATA_DIR || 'media';
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, upload_dir);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
var upload = multer({storage: storage}).single('photo');

module.exports.post = function (req, res, next) {
    var studentId = req.params.studentId;
    mongoose.model('Student').findById(studentId, function (err, student) {
        if(err || !student) {return next()}
        else{
            upload(req,res,function(err){
                if(err){
                    return next(new Error('Не вийшло завантажити фотографію'));
                }else{
                    var file = req.file;
                    var student1 = {
                        name: req.body.name,
                        headman: req.body.headman,
                        n: req.body.n,
                        group: req.body.group,
                        link: req.body.link,
                        male: req.body.male,
                        "badges.responsible" : req.body.responsible,
                        "badges.talent" : req.body.talent,
                        "badges.positive" : req.body.positive,
                        "badges.charisma" : req.body.charisma,
                        "badges.more" : req.body.more,
                        "badges.arsehole" : req.body.arsehole
                    }
                    if (file) {
                        student1.photo = file.filename;
                    };
                    student.update(
                        student1,
                        function(err,student){
                            if(err){
                                return next(new Error('Не вдалось створити студента)'));
                            }
                            return res.redirect('/admin/students');
                        }
                    )

                }
            });
        }
    })
}
