/**
 * Created by tania on 29.01.16.
 */
module.exports = function (app) {
    app.get('/admin/specialties', require('./list').get);

    app.get('/admin/specialties/new', require('./new').get);
    app.post('/admin/specialties/new', require('./new').post);
}