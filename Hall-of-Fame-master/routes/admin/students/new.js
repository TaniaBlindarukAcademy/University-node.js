/**
 * Created by tania on 29.01.16.
 */
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

var mongoose = require('mongoose');
module.exports.get = function (req, res, next) {
    mongoose.model('Group').find({},function(err,groups){
        if(err){
            return next(new Error('Помилка при завантажені груп'));
        }
        res.render('admin/students/new', {
            title: 'Express',
            groups: groups
        });
    });
};
module.exports.post = function (req, res, next) {
    console.log('POST');
    upload(req,res,function(err){
        if(err){
            return next(new Error('Не вийшло завантажити фотографію'));
        }else{
            var file = req.file;
            var student = {
                name: req.body.name,
                headman: req.body.headman,
                n: req.body.n,
                group: req.body.group,
                link: req.body.link,
                male: req.body.male
            }
            if (file) {
                student.photo = file.filename;
            };
            mongoose.model('Student').create(
                student,
                function(err,student){
                    if(err){
                        return next(new Error('Не вдалось створити студента)'));
                    }
                    return res.redirect('/admin');
                }
            )

        }
    });
};