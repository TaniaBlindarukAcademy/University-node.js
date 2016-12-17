var assert = require('assert');

module.exports = function (req, res, next) {
    if (!req.session.user && req.originalUrl !== '/admin/login') {
        return res.redirect('/admin/login');
    }
    return next();
};