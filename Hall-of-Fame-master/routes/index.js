var mongoose = require('mongoose');
var async = require('async');
var _ = require('underscore');
var colorHelper = require('../helper/color');
module.exports = function (app) {
    app.get('/', function (req, res, next) {
        mongoose.model('Student').find({})
            .sort({
                n: 1,
                headman: -1
            })
            .populate('group ')
            .exec(function (err, students) {
                if (err) {
                    return next();
                }
                var Speciality = mongoose.model('Speciality');
                var Group = mongoose.model('Group');
                Group.populate(students,{
                    path: 'group._speciality',
                    select: 'title',
                    model: Speciality
                },function(err,students){
                    if (err) {
                        return next();
                    }
                    var fullStudent = students.length;
                    var speciality = _.groupBy(students,function(student){
                        return student.group._speciality ? student.group._speciality.title : null;
                    });
                    speciality = _.map(speciality,function(value,key){
                        return {
                            fillColor: colorHelper.getRandomColor(),
                            data:[value.length],
                            label: key
                        }
                    });
                    var students = _.groupBy(students, function (student) {
                        return (new Date().getFullYear() - student.group.year_start)
                    });
                    var studentCount = _.map(students,function(value,key){
                        return {
                            value:value.length,
                            color: colorHelper.getRandomColor(),
                            label: key + ' курс'
                        }
                    });
                    return res.render('index', {
                        title: 'КРАЩІ СТУДЕНТИ ЖДТУ ФІКТ',
                        students: students,
                        block: require('../block/index'),
                        chart: JSON.stringify(studentCount),
                        fullStudentCount: fullStudent,
                        sessionId: req.sessionID,
                        speciality: JSON.stringify(speciality)
                    });
                });
            });
    });
    require('./admin/index')(app);
}
