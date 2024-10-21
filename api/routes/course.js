const express = require('express');
const { getCourses, getCourse } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourse);

module.exports = router;
