const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');


function routes(app) {
    app.get('/search', siteRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.get('/', siteRouter);
}

module.exports = routes;
