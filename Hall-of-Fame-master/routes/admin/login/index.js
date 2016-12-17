/**
 * Created by tania on 2.02.16.
 */

module.exports = function (app) {
    app.get('/admin/login', require('./login').get);
    app.post('/admin/login', require('./login').post);
}
