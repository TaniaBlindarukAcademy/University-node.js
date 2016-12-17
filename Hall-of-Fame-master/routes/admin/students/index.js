/**
 * Created by tania on 29.01.16.
 */
module.exports = function (app) {
    app.get('/admin/students', require('./list').get);

    app.get('/admin/students/new', require('./new').get);
    app.post('/admin/students/new', require('./new').post);

    app.get('/admin/students/:studentId/edit', require('./edit').get);
    app.post('/admin/students/:studentId/edit', require('./edit').post);

    app.get('/admin/students/:studentId/delete', require('./delete').get);
}