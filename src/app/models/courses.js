const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); // load plugin slug
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const courses = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 400},
    videoId: {type: String, required: true},
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});

//add plugin 
mongoose.plugin(slug); //add plugin slug
courses.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' }); //add plugin soft delete

module.exports = mongoose.model('courses', courses);