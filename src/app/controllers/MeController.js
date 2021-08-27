const courses = require('../models/courses');
const { multipleMongooseToObject } = require('../../util/mongoose'); 

class MeController {

    //[GET] /stored/courses

    storeCourses(req, res, next) {
        courses.find({  })
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }

    //[GET] /trash/courses

    trashCourses(req, res, next) {
        courses.findDeleted({  })
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
    
}

//Exports NewsController to news.js can require be like library express, morgan, path
module.exports = new MeController();
