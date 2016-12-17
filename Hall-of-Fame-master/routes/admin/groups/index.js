/**
 * Created by tania on 29.01.16.
 */
module.exports = function (app) {
    app.get('/admin/groups', require('./list').get);

    app.get('/admin/groups/new', require('./new').get);
    app.post('/admin/groups/new', require('./new').post);

    app.get('/admin/groups/:groupId/edit', require('./edit').get);
    app.post('/admin/groups/:groupId/edit', require('./edit').post);
}