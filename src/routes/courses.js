const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');


router.get('/create',courseController.create);
router.use('/store',courseController.store);
router.use('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.use('/:slug', courseController.show);
router.get('/',courseController.create);


module.exports = router;
