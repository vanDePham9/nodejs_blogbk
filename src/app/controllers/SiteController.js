const courses = require('../models/courses'); // tương tác vs model phải require 
const { multipleMongooseToObject } = require('../../util/mongoose'); // import helper đã tạo từ util 

class SiteController {
    //[GET] /
    index(req, res, next) {
        courses.find({})
            .then(courses => {
                
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
                
            .catch(next);

        
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

//Exports NewsController to news.js can require be like library express, morgan, path
module.exports = new SiteController();
