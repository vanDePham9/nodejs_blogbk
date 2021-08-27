const courses = require('../models/courses');
const { mongooseToObject } = require('../../util/mongoose'); 

class CourseController {

    //[GET] /courses/create

    create(req, res, next) {
        res.render('courses/create')
    }
    //[POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        
        const course = new courses(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {

            });
    }
    //[GET] /course/:slug
    show(req, res, next) {

        courses.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next)
    }

    //[GET] /courses/:id/edit

    edit(req, res, next) {
        courses.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
        
    }

    //[PUT] /courses/:id

    update(req, res, next) {
        courses.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
        
    }

    //[DELETE] /courses/:id
    delete(req, res, next) {
        courses.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        courses.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[PATCH] /:id/restore
    restore(req, res, next) {
        courses.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

//Exports NewsController to news.js can require be like library express, morgan, path
module.exports = new CourseController();
