const userRoutes = require('./user');
const quote = require('./quote');

module.exports = function (app, db) {
    userRoutes(app, db);
    quote(app, db);
};