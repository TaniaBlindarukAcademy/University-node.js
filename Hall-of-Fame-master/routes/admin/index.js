/**
 * Created by tania on 29.01.16.
 */
var checkAutorize = require('../../middleware/checkAdmin');
module.exports =function(app) {
    app.get('/admin/*',checkAutorize,function(req, res, next){
        next();
    });
    app.post('/admin/*',checkAutorize,function(req, res, next){
        next();
    });
    app.get('/admin', checkAutorize, function(req, res, next) {
        res.render('admin/index', { title: 'Admin' });
    });
    require('./groups')(app);
    require('./students')(app);
    require('./specialties')(app);
    require('./login')(app);
}